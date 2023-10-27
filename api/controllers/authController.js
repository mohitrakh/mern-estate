const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const errorHandler = require("../utils/error");
const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ username, email, password: hashedPass });
    res.status(201).json({
      msg: "user created",
    });
  } catch (error) {
    res.status(500).json({
      msg: "invalid",
      error: error,
    });
  }
};

module.exports = { signUp };
