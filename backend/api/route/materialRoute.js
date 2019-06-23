
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf' || file.mimetype === 'application/zip' || file.mimetype ==='application/msword') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Material = require("../model/material");



router.post("/", upload.single('file'), (req, res, next) => {
    console.log("post called");
    const material = new Material({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        materialCopy: req.file.path
    });
    material
        .save()
        .then(re => {
            console.log(re);
            res.status(201).json({
                message: "Created material successfully",
                createdMaterial: {
                    name: re.name,
                    _id: re._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:4000/material/" + re._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;

