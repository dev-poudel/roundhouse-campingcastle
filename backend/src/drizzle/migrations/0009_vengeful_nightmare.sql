ALTER TABLE "users" RENAME COLUMN "role" TO "isAdmin";--> statement-breakpoint
ALTER TABLE "rooms" DROP COLUMN "rating";--> statement-breakpoint
ALTER TABLE "rooms" DROP COLUMN "numberOfReviews";