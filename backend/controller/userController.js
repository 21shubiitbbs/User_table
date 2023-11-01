const User = require("../models/infomodel");

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findByIdAndDelete(_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete user", details: error });
  }
};

const createUser = async (req, res) => {
  try {
    delete req.body._id;
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      user
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Duplicate entry found" });
    }
    res.status(500).json({ error: "Could not save user data.", error });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      results: users.length,
      status: "Success",
      data: users
    });
  } catch (err) {
    res.status(500).json({ error: "Could not save user data." });
  }
};
const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    delete req.body._id;
    const userData = req.body;
    console.log("hello", _id, userData);
    const user = await User.findByIdAndUpdate(_id, userData, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      user
    });
  } catch (error) {
    res.status(500).json({ error: "Could not update user", details: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      user
    });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch user", details: error });
  }
};

module.exports = {
  createUser,
  getAllUser,
  deleteUser,
  updateUser,
  getUserById
};
