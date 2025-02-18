import { RoomSchema } from "../validation/validation";
import { asyncHandler } from "../middleware/asyncHandler";
import {Request,Response} from "express"

import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { RoomTable } from "../drizzle/schema";

// Create Room
export const createRoom = asyncHandler(async(req: Request, res: Response) => {
  try {
    // RoomSchema.parse(req.body)
    const { images, description, price, status,capacity } = req.body;

    if ( !description || !price || !capacity) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const [room] = await db.insert(RoomTable).values({
      images,
      description,
      price,
      status,
      capacity,

    }).returning();

    res.status(201).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get All Rooms
export const getAllRooms = asyncHandler(async(req: Request, res: Response) => {
  try {
    const rooms = await db.select().from(RoomTable);
    res.status(200).json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Single Room by ID
export const getRoomById = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const room = await db.select().from(RoomTable).where(eq(RoomTable.id, Number(id))).limit(1);

    if (room.length === 0) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.status(200).json(room[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Room
export const updateRoom = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { images, description, price, status, capacity } = req.body;

    const [updatedRoom] = await db.update(RoomTable)
      .set({
        images,
        description,
        price,
        status,
        capacity,
        
      })
      .where(eq(RoomTable.id, Number(id)))
      .returning();

    if (!updatedRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//  Delete Room
export const deleteRoom = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedRoom = await db.delete(RoomTable).where(eq(RoomTable.id, Number(id))).returning();

    if (deletedRoom.length === 0) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
