const mongoose = require("mongoose");
const Joi = require("joi");




let recipeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    ingredients: {
        type: Array
    },
    img_url: {
        type: String
    },
    category: {
        type: String //changed
    },
    subCategory:{
        type: Array //changed
    },
    info: {
        type: String
    },
    url_site: {  
        type: String,
    },
    rating: {
        type: Number,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
    },
    comments_id: [{ type: mongoose.Types.ObjectId, ref: 'comments' }],

    date_created: {
        type: Date,
        default: new Date(Date.now())
    },
})
exports.RecipeModel = mongoose.model("recipes", recipeSchema)

exports.validateRecipe = (_reqBody) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(1).max(999).required(),
        description: Joi.string().min(1).max(999).required(),
        ingredients: Joi.array().min(1).max(999).required(),
        info: Joi.string().min(1).max(999).required(),
        url_site: Joi.string().min(1).max(999).allow(null, ""),
        category: Joi.string().min(1).max(999).required(), // changed
        subCategory: Joi.array().min(0).max(999).allow(),// changed
        img_url: Joi.string().min(1).required(),
        rating: Joi.number().min(1).max(5).allow(null, ""),
        comments_id: Joi.array().allow()
    })
    return joiSchema.validate(_reqBody)
}