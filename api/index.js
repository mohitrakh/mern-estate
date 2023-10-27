const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoute");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://admin:admin@mern-estate.yxd95nn.mongodb.net/mern-estate?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.listen(3000, () => {
  console.log("server is listening on 3000!!");
});
