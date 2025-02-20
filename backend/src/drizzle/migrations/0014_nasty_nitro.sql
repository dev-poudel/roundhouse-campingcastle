CREATE TYPE "public"."view_status" AS ENUM('Garden View', 'City View', 'Rooms', 'Night view', 'Bonfire/BBQ Area');--> statement-breakpoint
CREATE TABLE "gallery" (
	"id" serial PRIMARY KEY NOT NULL,
	"viewType" "view_status" DEFAULT 'City View' NOT NULL,
	"image" text[] NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "rooms" DROP COLUMN "bookingExpired";