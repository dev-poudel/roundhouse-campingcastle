import express, { Router } from "express";
import { createRating, deleteRating, getAllRatings, getRatingById, updateRating } from "../controller/ratingController";

const router: Router = express.Router();

router.route("/").post(createRating); // Create Rating
router.route("/").get(getAllRatings); // Get All Ratings
router.route("/:id").get(getRatingById); // Get Single Rating
router.route("/:id").put(updateRating); // Update Rating
router.route("/:id").delete(deleteRating); // Delete Rating

export default router;