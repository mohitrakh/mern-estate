const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error");
const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ username, email, password: hashedPass });
    res.status(201).json({
      msg: "user created",
    });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "user not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credential"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("access_token", token, { httpsOnly: true }).status(200).json({
      msg: "found",
      rest,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, signIn };
