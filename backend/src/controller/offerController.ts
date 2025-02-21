import { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { OfferTable } from "../drizzle/schema";
import { asyncHandler } from "../middleware/asyncHandler";

// Create Offer
export const createOffer = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { title, subTitle, description, image, offerExpired } = req.body;

    if (!title || !subTitle || !description || !image) {
      return res.status(400).json({ error: "Please fill all the required fields" });
    }

    const [newOffer] = await db.insert(OfferTable).values({
      title,
      subTitle,
      description,
      image,
      offerExpired: offerExpired ? new Date(offerExpired) : null,
    }).returning();

    res.status(201).json(newOffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get All Offers
export const getAllOffers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const offers = await db.select().from(OfferTable);
    res.status(200).json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Single Offer by ID
export const getOfferById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const offer = await db.select().from(OfferTable).where(eq(OfferTable.id, Number(id))).limit(1);

    if (offer.length === 0) {
      return res.status(404).json({ error: "Offer not found" });
    }

    res.status(200).json(offer[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Offer
export const updateOffer = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, subTitle, description, image, offerExpired } = req.body;

    const [updatedOffer] = await db.update(OfferTable)
      .set({
        title,
        subTitle,
        description,
        image,
        offerExpired: offerExpired ? new Date(offerExpired) : null,
      })
      .where(eq(OfferTable.id, Number(id)))
      .returning();

    if (!updatedOffer) {
      return res.status(404).json({ error: "Offer not found" });
    }

    res.status(200).json(updatedOffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete Offer
export const deleteOffer = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedOffer = await db.delete(OfferTable).where(eq(OfferTable.id, Number(id))).returning();

    if (deletedOffer.length === 0) {
      return res.status(404).json({ error: "Offer not found" });
    }

    res.status(200).json({ message: "Offer deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});