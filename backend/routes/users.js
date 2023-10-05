import express from "express";
import {
  updatedUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} from "../controller/userController.js";
const router = express.Router();

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
//updated new User
router.put("/:id", verifyUser, updatedUser);

//delete new User
//router.delete("/:id", verifyUser, deleteUser);
router.delete("/:id", deleteUser);

//get Single new User
router.get("/:id", verifyUser, getSingleUser);

//get all new User
//router.get("/", verifyAdmin, getAllUser);
router.get("/", getAllUser);

export default router;
