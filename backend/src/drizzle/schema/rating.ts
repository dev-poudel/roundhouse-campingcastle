import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schemaHelper";

export const RatingTable = pgTable("ratings",{
    id,
    name : text().notNull(),
    rating : integer().notNull(),
    comment : text(),
    phoneNumber: text(),
    email: text(),
})

