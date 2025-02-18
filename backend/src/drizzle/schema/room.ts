import { boolean, integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
//rooms enum
export const roomStatuses = ["Single room","Deluxe Room","Double room","Twin room","Family room"] as const
export type roomStatus = (typeof roomStatuses)[number]
export const roomStatusEnum = pgEnum("room_status", roomStatuses)




export const RoomTable = pgTable("rooms", {
    id,
    images : text().array().notNull(),
    description : text().notNull(),
    price : integer().notNull(),
    status :roomStatusEnum().notNull().default("Deluxe Room"),
    booked : boolean().default(false),
    capacity : integer().notNull(),
    bookingExpired : timestamp({withTimezone:true}),
    createdAt,
    updatedAt
})
