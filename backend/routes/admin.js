import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createAdmin, getSingleAdmin } from "../controller/adminController.js";
const router = express.Router();
router.post("/", verifyAdmin, createAdmin);
router.get("/:id", verifyAdmin, getSingleAdmin);
export default router;
