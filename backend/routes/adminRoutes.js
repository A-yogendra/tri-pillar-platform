const express = require("express");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");
const Entry = require("../models/Entry");

const router = express.Router();

// ✅ Admin middleware
const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};

// ✅ Get all users
router.get("/users", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// ✅ Platform stats
router.get("/stats", protect, adminOnly, async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalEntries = await Entry.countDocuments();

  res.json({ totalUsers, totalEntries });
});

// ✅ Change user role
router.put("/users/:id/role", protect, adminOnly, async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.role = user.role === "admin" ? "student" : "admin";
  await user.save();

  res.json({ message: "Role updated", user });
});

// ✅ Delete user
router.delete("/users/:id", protect, adminOnly, async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  await user.deleteOne();
  res.json({ message: "User deleted" });
});
// ✅ Analytics
router.get("/analytics", protect, adminOnly, async (req, res) => {
  const entries = await Entry.aggregate([
    {
      $group: {
        _id: "$pillar",
        count: { $sum: 1 },
      },
    },
  ]);

  const result = {
    education: 0,
    health: 0,
    finance: 0,
  };

  entries.forEach((e) => {
    result[e._id] = e.count;
  });

  res.json(result);
});
const Log = require("../models/Log");

router.get("/logs", protect, adminOnly, async (req, res) => {
  const logs = await Log.find()
    .populate("userId", "name email")
    .sort({ createdAt: -1 })
    .limit(100);

  res.json(logs);
});

module.exports = router;

