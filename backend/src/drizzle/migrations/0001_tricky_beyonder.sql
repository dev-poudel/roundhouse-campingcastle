CREATE TYPE "public"."room_status" AS ENUM('Single room', 'Deluxe Room', 'Double room', 'Twin room', 'Family room');--> statement-breakpoint
CREATE TYPE "public"."view_status" AS ENUM('Garden View', 'City View');--> statement-breakpoint
CREATE TABLE "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"imageUrl" text NOT NULL,
	"description" text NOT NULL,
	"price" integer NOT NULL,
	"status" "room_status" DEFAULT 'Deluxe Room' NOT NULL,
	"viewType" "view_status" DEFAULT 'City View' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"customerName" text NOT NULL,
	"customerEmail" text NOT NULL,
	"bookingDate" timestamp NOT NULL,
	"numberOfGuests" integer NOT NULL,
	"phoneNumber" integer NOT NULL,
	"userId" integer NOT NULL,
	"roomId" integer NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_roomId_rooms_id_fk" FOREIGN KEY ("roomId") REFERENCES "public"."rooms"("id") ON DELETE cascade ON UPDATE no action;