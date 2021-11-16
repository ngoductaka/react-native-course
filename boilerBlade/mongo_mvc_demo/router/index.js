const express = require('express');
const multer = require('multer');
const path = require('path');

const User = require('./user.route');
// 
const app = express();

app.use('/user', User);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage });

app.post('/upload-file', upload.single('avatar'), (req, res) => {
    try {
        console.log('req.file', req.file)
        res.json({
            data: req.file,
        })
    } catch (err) {
        res.status(500).json({
            msg: 'internal err',
            err,
        })
    }

})

module.exports = app;