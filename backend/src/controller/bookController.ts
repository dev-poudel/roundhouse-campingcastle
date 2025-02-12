import { Request, Response } from "express";

import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { BookingTable } from "../drizzle/schema";
import { asyncHandler } from "../middleware/asyncHandler";

// Create Booking
export const createBooking =asyncHandler(async(req: Request, res: Response) => {
  try {
    const { customerName, customerEmail, bookingDate, numberOfGuests, phoneNumber, userId, roomId } = req.body;

    if (!customerName || !customerEmail || !bookingDate || !numberOfGuests || !phoneNumber || !userId || !roomId) {
      return res.status(400).json({error: "Please fill all the fields"});
    }

    const [newBooking] = await db.insert(BookingTable).values({
      customerName,
      customerEmail,
      bookingDate,
      numberOfGuests,
      phoneNumber,
      userId,
      roomId,
    }).returning();

    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get All Bookings
export const getAllBookings = asyncHandler(async(req: Request, res: Response) => {
  try {
    const bookings = await db.select().from(BookingTable);
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Single Booking by ID
export const getBookingById = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking = await db.select().from(BookingTable).where(eq(BookingTable.id, Number(id))).limit(1);

    if (booking.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json(booking[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Booking
export const updateBooking = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { customerName, customerEmail, bookingDate, numberOfGuests, phoneNumber } = req.body;

    const [updatedBooking] = await db.update(BookingTable)
      .set({
        customerName,
        customerEmail,
        bookingDate,
        numberOfGuests,
        phoneNumber,
      })
      .where(eq(BookingTable.id, Number(id)))
      .returning();

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete Booking
export const deleteBooking = asyncHandler(async(req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedBooking = await db.delete(BookingTable).where(eq(BookingTable.id, Number(id))).returning();

    if (deletedBooking.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
