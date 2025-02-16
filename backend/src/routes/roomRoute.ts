import express, { Router } from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controller/roomController";
import { isAdmin, isAuthenticate } from "../middleware/authMiddleware";

const router:Router = express.Router();

router.route("/").post(isAuthenticate,isAdmin,createRoom); // Create Room
router.route("/").get( getAllRooms); // Get All Rooms
router.route("/:id").get(getRoomById); // Get Single Room
router.route("/:id").put(isAuthenticate,isAdmin,updateRoom); // Update Room
router.route("/:id").delete(isAuthenticate,isAdmin,deleteRoom); // Delete Room

export default router;
