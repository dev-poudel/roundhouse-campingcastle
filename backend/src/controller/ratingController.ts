import { Request, Response } from "express";
import { desc, eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { RatingTable, UserTable } from "../drizzle/schema";
import { asyncHandler } from "../middleware/asyncHandler";

// Create Rating
export const createRating =asyncHandler(async(req: Request, res: Response) => {
  try {
    const { name, rating, comment, userId } = req.body;

    if (!name || !rating || !userId) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const [newRating] = await db.insert(RatingTable).values({
      name,
      rating,
      comment,
      userId,
    }).returning();

    res.status(201).json(newRating);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get All Ratings
export const getAllRatings = asyncHandler(async(req: Request, res: Response) => {
  try {
    const ratings = await db.select({
      id:  RatingTable.id,
      rating: RatingTable.rating,
      comment : RatingTable.comment,
      name: RatingTable.name,
      user: {
        name : UserTable.name,
        email: UserTable.email
      }
    }).from(RatingTable)
    .leftJoin(UserTable,eq(RatingTable.userId,UserTable.id))
    .orderBy(desc(RatingTable.id))
    res.status(200).json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Get Single Rating by ID
export const getRatingById = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const rating = await db.select({
      id:  RatingTable.id,
      rating: RatingTable.rating,
      comment : RatingTable.comment,
      name: RatingTable.name,
      user: {
        name : UserTable.name,
        email: UserTable.email
      }
    }).from(RatingTable).where(eq(RatingTable.id, Number(id))).limit(1)
    .leftJoin(UserTable,eq(RatingTable.userId,RatingTable.id));

    if (rating.length === 0) {
      return res.status(404).json({ error: "Rating not found" });
    }

    res.status(200).json(rating[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Rating
export const updateRating = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, rating, comment } = req.body;

    const [updatedRating] = await db.update(RatingTable)
      .set({
        name,
        rating,
        comment,
      })
      .where(eq(RatingTable.id, Number(id)))
      .returning();

    if (!updatedRating) {
      return res.status(404).json({ error: "Rating not found" });
    }

    res.status(200).json(updatedRating);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete Rating
export const deleteRating = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedRating = await db.delete(RatingTable).where(eq(RatingTable.id, Number(id))).returning();

    if (deletedRating.length === 0) {
      return res.status(404).json({ error: "Rating not found" });
    }

    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
