import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { getAllPayment, createPayment } from "../controller/payController.js";
const router = express.Router();
router.post("/", verifyUser, createPayment);
router.get("/", getAllPayment);
export default router;
