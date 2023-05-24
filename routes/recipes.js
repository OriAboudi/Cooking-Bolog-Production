
const express = require("express")
const { auth, fileUpload, authAdmin } = require("../middlewares/atuh");
const { CategoryModel } = require("../models/categoryModel");
const { RecipeModel, validateRecipe } = require("../models/recipeModel");
const { UserModel } = require("../models/userModel");
const router = express.Router();


router.get("/", async (req, res) => {
    let page = Number(req.query.page) || 1;
    let perPage = Number(req.query.perPage) || 9;

    try {
        let data = await RecipeModel.find().populate('comments_id')
            .limit(perPage)
            .skip((page - 1) * perPage)

        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/popular", async (req, res) => {
    let page = Number(req.query.page) || 1;
    let perPage = Number(req.query.perPage) || 16;

    try {
        let data = await RecipeModel.find({ rating: { $gt: 3, $lt: 6 } })
            .limit(perPage)
            .skip((page - 1) * perPage)

        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/graphRating", async (req, res) => {
    try {
        let data = await RecipeModel.find({})
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/search", async (req, res) => {
    const skip = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    let searchQ = req.query.s;
    let searchExp = new RegExp(searchQ, "i")

    try {
        let data = await RecipeModel.find({ $or: [{ name: searchExp }, { info: searchExp }] })
            .skip((skip - 1) * limit)
            .limit(limit)
            .sort({ _id: -1 })
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/:id", async (req, res) => {
    try {
        let data = await RecipeModel.findOne({ _id: req.params.id }).populate('comments_id')
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/recipeUser", auth, async (req, res) => {

    try {
        let data = await RecipeModel.find({ _id: req.tokenData._id })
            .limit(perPage)
            .skip((page - 1) * perPage)
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/rating", auth, async (req, res) => {
    try {
        let data = await RecipeModel.find({ rating: { $gt: 4 } })
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/recentRecipe", auth, async (req, res) => {
    try {
        let data = await RecipeModel.find({})
            .limit(4)
            .sort({ [date_created]: -1 })

        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.get("/pages/count", async (req, res) => {
    let perPage = Number(req.query.perPage) || 15;
    let category = req.query.category;
    let searchQ = req.query.s;
    let popular = req.query.popular;
    let searchExp = new RegExp(searchQ, "i")
    let userId = req.query.id
    try {
        let findQuery = {};

        if (userId) {
            findQuery = { user_id: userId }
        } else if (category) {
            findQuery.category = category;
        } else if (searchQ) {
            findQuery = { $or: [{ name: searchExp }, { info: searchExp }] }
        } else if (popular) {
            findQuery = { rating: { $gt: 3, $lt: 6 } }
        }

        let count = await RecipeModel.countDocuments(findQuery);
        let pages = Math.ceil(count / perPage);
        res.json({ count, pages })

    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.post('/', auth, fileUpload, async (req, res) => {

    let validBody = validateRecipe(req.body)
    if (validBody.error) {
        return res.status(500).json(validBody.error.details)
    }
    try {
        const recipeObject = req.body;
        recipeObject.user_id = req.tokenData._id;
        recipeObject.img_url = req.cloudinaryUrl;

        console.log(recipeObject);

        recipe = new RecipeModel(recipeObject)
        await recipe.save();

        let user = await UserModel.findById(req.tokenData._id);
        user.recipe_id.push(recipe._id);
        await user.save()

        for (const item of recipe.subCategory) {
            let category = await CategoryModel.findOne({ url_code: item.value })

            if (category) {
                category.recipe_of_cat_id.push(recipe._id);
                await category.save();
            }
        }

        res.status(201).json(recipe);
    } catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
});
router.put('/update/:id', authAdmin, async (req, res) => {
    let id = req.params.id; // id of recipe 
    let newRecipe = req.body
    let validBody = validateRecipe(req.body);
    if (validBody.error) {
        return res.status(500).json(validBody.error.details)
    }
    try {
        let oldRecipe = await RecipeModel.findById(id) // find the old recipe 
        for (const item of oldRecipe.subCategory) { // remove the old category from the array of recipe_of_cat_id
            category = await CategoryModel.findOne({ url_code: item.value })
            console.log(category);
            if (category) {
                const index = category.recipe_of_cat_id.indexOf(oldRecipe._id);

                // If the element exists in the array, remove it
                if (index !== -1) {
                    category.recipe_of_cat_id.splice(index, 1);
                }
                await category.save();
            }
        }
        newRecipe.user_id = req.tokenData._id
        let updatedRecipe = await RecipeModel.updateOne({ _id: id }, newRecipe)

        for (const item of newRecipe.subCategory) {
            let category = await CategoryModel.findOne({ url_code: item.value })
            console.log(category);
            if (category) {
                category.recipe_of_cat_id.push(id);
                await category.save();
            }
        }
        res.status(201).json({ msg: "updated", updatedRecipe })

    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
router.delete('/del/:id', authAdmin, async (req, res) => {
    try {
        let id = req.params.id
        let data = await RecipeModel.deleteOne({ _id: id })
        res.status(200).json({ data, msg: "recipe deleted" });
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
module.exports = router;
