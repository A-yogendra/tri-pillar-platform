const Log = require("../models/Log");

const logAction = async (userId, action, details = "") => {
  try {
    await Log.create({ userId, action, details });
  } catch (err) {
    console.error("Log error:", err.message);
  }
};

module.exports = logAction;
