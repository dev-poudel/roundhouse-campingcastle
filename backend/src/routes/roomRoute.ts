import express, { Router } from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controller/roomController";

const router:Router = express.Router();

router.route("/").post(createRoom); // Create Room
router.route("/").get( getAllRooms); // Get All Rooms
router.route("/:id").get(getRoomById); // Get Single Room
router.route("/:id").put(updateRoom); // Update Room
router.route("/:id").delete(deleteRoom); // Delete Room

export default router;
