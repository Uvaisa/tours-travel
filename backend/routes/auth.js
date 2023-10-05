import express from "express";
import {
  register,
  login,
  registerAdmin,
  adminlogin,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/adminregister", registerAdmin);
router.post("/adminlogin", adminlogin);

export default router;
