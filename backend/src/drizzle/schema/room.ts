import { boolean, integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
//rooms enum
export const roomStatuses = ["Single room","Deluxe Room","Double room","Twin room","Family room"] as const
export type roomStatus = (typeof roomStatuses)[number]
export const roomStatusEnum = pgEnum("room_status", roomStatuses)

//view type enum
export const viewStatuses = ["Garden View", "City View"] as const
export type viewStatus = (typeof viewStatuses)[number]
export const viewStatusEnum = pgEnum("view_status", viewStatuses)


export const RoomTable = pgTable("rooms", {
    id,
    imageUrl : text().array().notNull(),
    description : text().notNull(),
    price : integer().notNull(),
    status :roomStatusEnum().notNull().default("Deluxe Room"),
    viewType : viewStatusEnum().notNull().default("City View"),
    booked : boolean().default(false),
    capacity : integer().notNull(),
    bookingExpired : timestamp({withTimezone:true}),
    createdAt,
    updatedAt
})