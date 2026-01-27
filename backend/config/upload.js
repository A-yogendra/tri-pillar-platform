const multer = require("multer");
const path = require("path");

// storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // ✅ save in uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// file filter (allow images + pdf + video)
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "application/pdf",
    "video/mp4",
    "video/mkv",
  ];

  if (allowedTypes.includes(file.mimetype)) cb(null, true);
  else cb(new Error("❌ File type not supported!"), false);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
