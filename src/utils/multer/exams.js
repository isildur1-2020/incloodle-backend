const path = require("path");
const uuid = require("uuid");
const multer = require("multer");
const { host } = require("../../config/variables");

const examPath = path.join(process.cwd(), "src/public/exams");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, examPath);
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    const newFileName = `${uuid.v4()}.${extension}`;
    req.wholeFileName = `${host}/exams/${newFileName}`;
    cb(null, newFileName);
  },
});

module.exports = multer({ storage });
