import { boolean, integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";


// export const UserRoles = ["user", "admin"] as const
// export type UserRole = (typeof UserRoles)[number]
// export const UserRoleEnum = pgEnum("user_status", UserRoles)

export const UserTable = pgTable("users", {
     id,
    name : text().notNull(),
    email : text().notNull(),
    password : text().notNull(),
    isAdmin : boolean().default(true),
    deletedAt : timestamp({withTimezone:true}),
    createdAt,
     updatedAt
})

