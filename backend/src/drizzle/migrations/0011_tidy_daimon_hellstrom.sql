ALTER TABLE "rooms" RENAME COLUMN "image" TO "images";--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "id" SET DATA TYPE serial;