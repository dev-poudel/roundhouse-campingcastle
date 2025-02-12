import express, { Router } from "express";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../controller/bookController";

const router:Router = express.Router();

router.route("/").post(createBooking); // Create Booking
router.route("/").get(getAllBookings); // Get All Bookings
router.route("/:id").get(getBookingById); // Get Booking by ID
router.route("/:id").put(updateBooking); // Update Booking
router.route("/:id").delete(deleteBooking); // Delete Booking

export default router;
