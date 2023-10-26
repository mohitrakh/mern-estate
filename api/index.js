const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://admin:admin@mern-estate.yxd95nn.mongodb.net/mern-estate?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  });

const app = express();
app.use("/api/user", userRouter);
app.listen(3000, () => {
  console.log("server is listening on 3000!!");
});
