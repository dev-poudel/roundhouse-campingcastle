CREATE TABLE "ratings" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"rating" integer NOT NULL,
	"comment" text,
	"userId" integer NOT NULL,
	"roomId" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "rooms" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "rooms" ALTER COLUMN "imageUrl" SET DATA TYPE text[];--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "phoneNumber" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "rooms" ADD COLUMN "booked" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "rooms" ADD COLUMN "bookingExpired" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_roomId_rooms_id_fk" FOREIGN KEY ("roomId") REFERENCES "public"."rooms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "imageUrl";