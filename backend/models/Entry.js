const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    pillar: {
      type: String,
      enum: ["education", "health", "finance"],
      required: true,
    },

    title: { type: String, required: true },
    amount: { type: Number, default: 0 },
    note: { type: String, default: "" },
    date: { type: Date, default: Date.now },

    // ✅ NEW: Uploaded file info
    fileUrl: { type: String, default: "" },
    fileType: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", entrySchema);
