import { pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../schemaHelper"

//view type enum
export const viewStatuses = ["Garden View", "City View","Rooms","Night view", "Bonfire/BBQ Area"] as const
export type viewStatus = (typeof viewStatuses)[number]
export const viewStatusEnum = pgEnum("view_status", viewStatuses)


export const GalleryTable = pgTable("gallery",{
    id,
    viewType : viewStatusEnum().notNull().default("City View"),
    image :text().array().notNull(),
    createdAt,
    updatedAt
})