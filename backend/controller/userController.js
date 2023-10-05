import User from "../models/User.js";

//create new User
export const createUser = async (req, resp) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    resp.status(200).json({
      success: true,
      message: "Successfully creat",
      data: savedUser,
    });
  } catch (err) {
    resp.status(500).json({ success: false, message: "Not  created" });
  }
};

//update User
export const updatedUser = async (req, resp) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    resp.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    resp.status(500).json({ success: false, message: "failed to update" });
  }
};

//delete User by id
export const deleteUser = async (req, resp) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    resp.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    resp.status(500).json({ success: false, message: "failed to delete" });
  }
};

//get single User by id
export const getSingleUser = async (req, resp) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    resp.status(200).json({
      success: true,
      message: "Successfully found",
      data: user,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "failed to find" });
  }
};

//get All User
export const getAllUser = async (req, resp) => {
  try {
    const users = await User.find();

    resp.status(200).json({
      success: true,
      message: "Successfully found",
      data: users,
    });
  } catch (err) {
    resp.status(404).json({ success: false, message: "failed to find" });
  }
};
