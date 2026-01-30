const Log = require("../models/Log");

async function logAction(userId, action, details = "") {
  try {
    console.log("🔥 LOGGING:", userId, action, details);

    await Log.create({
      userId,
      action,
      details,
    });

    console.log("✅ Log saved");
  } catch (err) {
    console.error("❌ Log failed:", err.message);
  }
}

module.exports = logAction;
