import { boolean, integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";


// export const UserRoles = ["user", "admin"] as const
// export type UserRole = (typeof UserRoles)[number]
// export const UserRoleEnum = pgEnum("user_status", UserRoles)

export const UserTable = pgTable("users", {
     id:serial("id").primaryKey().notNull(),
    name : text("name").notNull(),
    email : text("email").notNull(),
    password : text("password").notNull(),
    isAdmin : boolean("isAdmin").default(true),
    deletedAt : timestamp({withTimezone:true}),
    createdAt,
     updatedAt
})

