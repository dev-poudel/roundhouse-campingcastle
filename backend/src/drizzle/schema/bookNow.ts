import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelper";
import { UserTable } from "./user";
import { RoomTable } from "./room";


export const BookingTable = pgTable("bookings", {
    id:  integer("id").primaryKey(),
    customerName: text().notNull(),
    customerEmail: text().notNull(),
    bookingDate : timestamp().notNull(),
    numberOfGuests : integer().notNull(),
    phoneNumber : text().notNull(),
    userId: integer().notNull().references(() => UserTable.id, { onDelete: "cascade" }), // Foreign Key
    roomId: integer().notNull().references(() => RoomTable.id, { onDelete: "cascade" }), // Foreign Key,
    createdAt,
    updatedAt
})