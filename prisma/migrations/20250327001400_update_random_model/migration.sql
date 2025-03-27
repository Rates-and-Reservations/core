-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "ResourceBookingConfig" ADD COLUMN     "enableWaitlist" BOOLEAN NOT NULL DEFAULT false;
