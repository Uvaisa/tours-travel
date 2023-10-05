import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  getBooking,
  getAllBooking,
  createBooking,
} from "../controller/bookingConroller.js";
const router = express.Router();
router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
//router.get("/", verifyUser, getAllBooking);
//router.get("/", verifyAdmin, getAllBooking);
router.get("/", getAllBooking);

export default router;
