import express from "express";
import {
  createTour,
  updatedTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);

//updated new tour
router.put("/:id", verifyAdmin, updatedTour);

//delete new tour
//router.delete("/:id", verifyAdmin, deleteTour);
router.delete("/:id", deleteTour);

//get Single new tour
router.get("/:id", getSingleTour);

//get all new tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
//get tour by search
router.get("/search/getFeaturedTours", getFeaturedTour);
//get tour by search
router.get("/search/getTourCount", getTourCount);

export default router;
