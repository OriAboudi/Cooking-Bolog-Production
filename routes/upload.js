const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dzchbifhx",
    api_key: "784936575215999",
    api_secret: "2QGBmU0ixE8piFKoVOW0EiE6OVQ"
});

// main route 
router.get("/", (req, res) => {
    res.json({ msg: "Welcome to my API " });
})

router.post("/recipes", async (req, res) => {
    try {

        const data = await
            cloudinary.uploader.upload(req.body.image, { unique_filename: true })
        console.log(data);
        res.json(data)
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})
module.exports = router;