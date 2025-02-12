ALTER TABLE "rooms" ADD COLUMN "rating" integer;--> statement-breakpoint
ALTER TABLE "rooms" ADD COLUMN "numberOfReviews" integer;--> statement-breakpoint
ALTER TABLE "bookings" DROP COLUMN "status";