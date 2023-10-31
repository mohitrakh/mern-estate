const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoute");
const cookieParser = require("cookie-parser");

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
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is listening on 3000!!");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
