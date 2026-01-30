const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("MongoDB connected");

  const email = "admin@tripillar.com";

  const existing = await User.findOne({ email });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email,
    password: hashedPassword,
    role: "admin",
  });

  console.log("✅ Admin user created");
  console.log("📧 Email: admin@tripillar.com");
  console.log("🔑 Password: admin123");

  process.exit();
});
