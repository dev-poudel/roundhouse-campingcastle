ALTER TABLE "ratings" DROP CONSTRAINT "ratings_roomId_rooms_id_fk";
--> statement-breakpoint
ALTER TABLE "rooms" DROP COLUMN "viewType";--> statement-breakpoint
ALTER TABLE "ratings" DROP COLUMN "roomId";--> statement-breakpoint
DROP TYPE "public"."view_status";