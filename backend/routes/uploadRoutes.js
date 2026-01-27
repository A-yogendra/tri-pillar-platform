const express = require("express");
const multer = require("multer");
const path = require("path");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ storage config
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// ✅ Upload Route
router.post("/", protect, upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(201).json({
      message: "✅ File uploaded successfully",
      fileUrl: `/uploads/${req.file.filename}`,   // ✅ VERY IMPORTANT
      fileType: req.file.mimetype,
      originalName: req.file.originalname,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
