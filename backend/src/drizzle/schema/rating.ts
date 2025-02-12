import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelper";
import { UserTable } from "./user";
import { RoomTable } from "./room";

export const RatingTable = pgTable("ratings",{
    id,
    name : text().notNull(),
    rating : integer().notNull(),
    comment : text(),
      userId: integer().notNull().references(() => UserTable.id, { onDelete: "cascade" }), // Foreign Key
       roomId: integer().notNull().references(() => RoomTable.id, { onDelete: "cascade" }), // Foreign Key,
})

