const { Storage } = require("@google-cloud/storage");
const multer = require("multer");
const { bucket, multerUpload } = require("../helpers/imagesUploader");

const uploadImages = async (req, res) => {
  try {
    const uploadedFiles = req.files;
    const brand = req.body.brand;
    const userDirectory = `user_${brand}`;
    console.log(uploadedFiles);
    console.log(brand);

    // Save the uploaded files to Google Cloud Storage
    const imageLinks = await Promise.all(
      uploadedFiles.map(async (file, index) => {
        const fileName = `advertisement_${Date.now()}_${
          index + 1
        }.${file.originalname.split(".").pop()}`;
        const filePath = `${userDirectory}/${fileName}`;
        const fileUpload = bucket.file(filePath);
        const stream = fileUpload.createWriteStream({
          metadata: { contentType: file.mimetype },
        });

        // Wait for the stream to finish writing before resolving the promise
        await new Promise((resolve, reject) => {
          stream.on("finish", () => {
            resolve();
          });
          stream.on("error", (error) => {
            reject(error);
          });
          stream.end(file.buffer);
        });

        return `https://storage.cloud.google.com/carseek/${filePath}`;
      })
    );

    console.log(imageLinks);
    return res.status(200).json({ imageLinks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Image upload failed" });
  }
};

module.exports = { uploadImages };
