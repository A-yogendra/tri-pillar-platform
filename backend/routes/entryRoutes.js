const express = require("express");
const protect = require("../middleware/authMiddleware");
const Entry = require("../models/Entry");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

/* =======================
   MULTER CONFIG
======================= */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* =======================
   CREATE ENTRY (with file)
======================= */
router.post("/", protect, upload.single("file"), async (req, res) => {
  try {
    const { pillar, title, amount, note } = req.body;

    if (!pillar || !title) {
      return res.status(400).json({ message: "Pillar and Title are required" });
    }

    const entry = await Entry.create({
      userId: req.user.id,
      pillar,
      title,
      amount: amount || 0,
      note: note || "",
      fileUrl: req.file ? `/uploads/${req.file.filename}` : "",
      fileType: req.file ? req.file.mimetype : "",
    });

    res.status(201).json({ message: "✅ Entry added", entry });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =======================
   GET USER ENTRIES
======================= */
router.get("/", protect, async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =======================
   UPDATE ENTRY (edit)
======================= */
router.put("/:id", protect, upload.single("file"), async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    if (entry.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // update text
    entry.title = req.body.title || entry.title;
    entry.note = req.body.note || entry.note;

    // replace file if new one uploaded
    if (req.file) {
      if (entry.fileUrl) {
        const oldFilePath = path.join(
          __dirname,
          "..",
          entry.fileUrl
        );
        fs.existsSync(oldFilePath) && fs.unlinkSync(oldFilePath);
      }

      entry.fileUrl = `/uploads/${req.file.filename}`;
      entry.fileType = req.file.mimetype;
    }

    await entry.save();
    res.json({ message: "✅ Entry updated", entry });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =======================
   DELETE ENTRY
======================= */
router.delete("/:id", protect, async (req, res) => {
  try {
    const entry = await Entry.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    if (entry.fileUrl) {
      const filePath = path.join(__dirname, "..", entry.fileUrl);
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }

    await entry.deleteOne();
    res.json({ message: "✅ Entry deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
