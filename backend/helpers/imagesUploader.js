const { Storage } = require("@google-cloud/storage");
const multer = require("multer");
const path = require("path");

// Initialize Google Cloud Storage
const storage = new Storage({
  keyFilename: path.join(__dirname, "../carseek-412705-f4238195fb98.json"),
  projectId: "carseek-412705",
});

const bucket = storage.bucket("carseek");

const multerStorage = multer.memoryStorage();
const multerUpload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    if (["image/jpeg", "image/png", "image/svg+xml"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB limit
});

module.exports = { bucket, multerUpload };
