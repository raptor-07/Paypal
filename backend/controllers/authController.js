const User = require("../models/userModel");
const jwtSigner = require("../utils/jwtSigner");

const signup = async (req, res) => {
  const newUser = await new User(req.body).save();
  const data = await User.findById(newUser.id).lean();
  const token = jwtSigner.signToken(data);
  res.status(201).json({
    status: "success",
    data: {
      token,
    },
  });
};

const login = (req, res) => {
  res.send("login");
};
const logout = (req, res) => {
  res.send("logout");
};
const forgotPassword = (req, res) => {
  res.send("forgotPassword");
};
const resetPassword = (req, res) => {
  res.send("resetPassword");
};
const updateEmail = (req, res) => {
  res.send("updateEmail");
};

module.exports = {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
  updateEmail,
};
