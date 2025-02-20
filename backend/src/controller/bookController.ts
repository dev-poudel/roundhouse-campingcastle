import { Request, Response } from "express";

import { desc, eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { BookingTable, RoomTable, UserTable } from "../drizzle/schema";
import { asyncHandler } from "../middleware/asyncHandler";

// Create Booking
export const createBooking =asyncHandler(async(req: Request, res: Response) => {
  try {
    const { customerName, customerEmail, bookingDate, numberOfGuests, phoneNumber, userId, roomId } = req.body;

    if (!customerName || !customerEmail || !bookingDate || !numberOfGuests || !phoneNumber || !userId || !roomId) {
      return res.status(400).json({error: "Please fill all the fields"});
    }
    const parsedBookingDate = new Date(bookingDate);

    const [newBooking] = await db.insert(BookingTable).values({
      customerName,
      customerEmail,
      bookingDate: parsedBookingDate,
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
    const bookings = await db.select({
      id: BookingTable.id,
      customerName: BookingTable.customerName,
      customerEmail:BookingTable.customerEmail,
      bookingDate: BookingTable.bookingDate,
      numberOfGuests: BookingTable.numberOfGuests,
      phoneNumber: BookingTable.phoneNumber,
      user: {
        name : UserTable.name,
        email : UserTable.email
      },
      room: {
        booked : RoomTable.booked,
        bookingExpired : RoomTable.bookingExpired,
        price : RoomTable.price,
        images : RoomTable.images
      },
    }).from(BookingTable)
    .leftJoin(UserTable,eq(BookingTable.userId,UserTable.id))
    .leftJoin(RoomTable,eq(BookingTable.roomId,RoomTable.id))
    .orderBy(desc(BookingTable.id));
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
    const booking = await db.select({
      id: BookingTable.id,
      customerName: BookingTable.customerName,
      customerEmail:BookingTable.customerEmail,
      bookingDate: BookingTable.bookingDate,
      numberOfGuests: BookingTable.numberOfGuests,
      phoneNumber: BookingTable.phoneNumber,
      user: {
        name : UserTable.name,
        email : UserTable.email
      },
      room: {
        booked : RoomTable.booked,
        bookingExpired : RoomTable.bookingExpired,
        price : RoomTable.price,
        images : RoomTable.images
      },
    }).from(BookingTable).where(eq(BookingTable.id, Number(id))).limit(1)
    .leftJoin(UserTable,eq(BookingTable.userId,UserTable.id))
    .leftJoin(RoomTable,eq(BookingTable.roomId,RoomTable.id))
    ;

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
    const parsedBookingDate = new Date(bookingDate);


    const [updatedBooking] = await db.update(BookingTable)
      .set({
        customerName,
        customerEmail,
        bookingDate: parsedBookingDate,
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
