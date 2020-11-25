import dotenv from "dotenv";
import connectDB from "./config/db.js";
import asyncHandler from "express-async-handler";
import User from "./models/User.js";
import users from "./data/users.js";

dotenv.config();
connectDB();

const dataIn = asyncHandler(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  console.log("data imported");
  process.exit(0);
});

dataIn();
