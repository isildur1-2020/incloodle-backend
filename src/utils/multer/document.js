const path = require("path");
const uuid = require("uuid");
const multer = require("multer");
const { host } = require("../../config/variables");

const documentPath = path.join(process.cwd(), "src/public/material");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, documentPath);
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    const newFileName = `${uuid.v4()}.${extension}`;
    req.wholeFileName = `${host}/material/${newFileName}`;
    cb(null, newFileName);
  },
});

module.exports = multer({ storage });
