ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'admin';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "rooms" ADD COLUMN "capacity" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "bookings" ADD COLUMN "status" varchar(50) DEFAULT 'New' NOT NULL;