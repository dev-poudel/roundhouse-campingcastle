import { integer, serial, timestamp } from "drizzle-orm/pg-core";

export const id = serial().primaryKey().notNull()
export const createdAt = timestamp({withTimezone:true}).notNull().defaultNow()
export const updatedAt = timestamp({withTimezone:true}).notNull().defaultNow().$onUpdate(()=> new Date())