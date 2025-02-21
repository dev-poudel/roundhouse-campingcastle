import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";

export const OfferTable = pgTable("offers",{
    id,
    title : text().notNull(),
    subTitle : text().notNull(),
    description : text().notNull(),
    image: text().notNull(),
    offerExpired: timestamp(),
    createdAt,
    updatedAt
})

