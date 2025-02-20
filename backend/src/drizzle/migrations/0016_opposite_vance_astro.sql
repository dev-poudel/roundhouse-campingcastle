ALTER TABLE "ratings" RENAME COLUMN "userId" TO "phoneNumber";--> statement-breakpoint
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "ratings" ADD COLUMN "email" text;