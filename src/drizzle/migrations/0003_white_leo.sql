ALTER TABLE "comment" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "comment" ALTER COLUMN "updated_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "driver" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "driver" ALTER COLUMN "updated_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "order_status" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "estimated_delivery_time" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "actual_delivery_time" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "createdAt" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updatedAt" SET DATA TYPE date;