const express = require("express");
const protect = require("../middleware/authMiddleware");
const Entry = require("../models/Entry");

const router = express.Router();

/* ===========================
   Admin middleware
=========================== */
const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};

/* ===========================
   Get ALL entries (all users)
=========================== */
router.get("/", protect, adminOnly, async (req, res) => {
  const entries = await Entry.find()
    .populate("userId", "name email")
    .sort({ createdAt: -1 });

  res.json(entries);
});

/* ===========================
   Delete ANY entry
=========================== */
router.delete("/:id", protect, adminOnly, async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (!entry) {
    return res.status(404).json({ message: "Entry not found" });
  }

  await entry.deleteOne();
  res.json({ message: "Entry removed by admin" });
});

module.exports = router;
