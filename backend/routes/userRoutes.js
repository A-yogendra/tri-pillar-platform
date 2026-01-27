const express = require("express");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

/* =====================================================
   GET LOGGED-IN USER
===================================================== */
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================================================
   MULTER CONFIG (SAFE)
===================================================== */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join("uploads", "avatars");

    // ✅ ensure folder exists (important!)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* =====================================================
   UPDATE AVATAR
===================================================== */
router.put(
  "/avatar",
  protect,
  upload.single("avatar"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const user = await User.findById(req.user.id);

      // ✅ delete old avatar if exists
      if (user.avatar) {
        const oldPath = path.join(__dirname, "..", user.avatar);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      // ✅ save new avatar
      user.avatar = `/uploads/avatars/${req.file.filename}`;
      await user.save();

      res.json({
        message: "✅ Avatar updated",
        avatar: user.avatar,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

module.exports = router;
