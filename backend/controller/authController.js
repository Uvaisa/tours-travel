import User from "../models/User.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registration
export const register = async (req, resp) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
      phoneNo: req.body.phoneNo,
      aadharNo: req.body.aadharNo,
    });
    await newUser.save();
    resp
      .status(200)
      .json({ success: true, message: "successfully created", data: newUser });
  } catch (error) {
    resp.status(500).json({ success: false, message: "failed to create" });
  }
};

//user login
export const login = async (req, resp) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    // if user does't exist
    if (!user) {
      return resp
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    // if user exists then check the password and compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // if password is incorrect
    if (!checkCorrectPassword) {
      return resp
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }
    const { password, role, ...rest } = user._doc;

    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_kEY,
      { expiresIn: "15d" }
    );
    // set token in the browser cookies and send the response to the client
    resp
      .cookie("accessToken", token, {
        httpOnly: true, //only client side can access
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (error) {
    resp.status(500).json({ success: false, message: "Failed to Login" });
  }
};
//admin register
export const registerAdmin = async (req, resp) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newAdmin = new Admin({
      email: req.body.email,
      password: hash,
      name: req.body.name,
      phone: req.body.phone,
    });
    await newAdmin.save();
    resp
      .status(200)
      .json({ success: true, message: "successfully created", data: newAdmin });
  } catch (error) {
    resp.status(500).json({ success: false, message: "failed to create" });
  }
};
//admin login
export const adminlogin = async (req, resp) => {
  const email = req.body.email;
  try {
    const admin = await Admin.findOne({ email });
    // if user does't exist
    if (!admin) {
      return resp
        .status(404)
        .json({ success: false, message: "admin not found" });
    }
    // if admin exists then check the password and compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    // if password is incorrect
    if (!checkCorrectPassword) {
      return resp
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }
    const { password, role, ...rest } = admin._doc;

    //create jwt token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET_kEY,
      { expiresIn: "15d" }
    );
    // set token in the browser cookies and send the response to the client
    resp
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (error) {
    resp.status(500).json({ success: false, message: "Admin Failed to Login" });
  }
};
