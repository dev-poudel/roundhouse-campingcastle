ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE boolean;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" DROP NOT NULL;--> statement-breakpoint
DROP TYPE "public"."user_status";