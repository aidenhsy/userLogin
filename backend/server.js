import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.listen(PORT, console.log(`listening on port:${PORT}`));
