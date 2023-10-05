import express from "express";
import { myBooking } from "../controller/mybookingController.js";
const router = express.Router();
router.get("/:userId", myBooking);
export default router;
