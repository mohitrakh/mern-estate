import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("connected to db");
});
const app = express();

app.listen(3000, () => {
  console.log("server is listening on 3000!!");
});
