/*
  Warnings:

  - You are about to drop the column `status` on the `BookingItemTransition` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `BookingTransition` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `WaitlistEntryTransition` table. All the data in the column will be lost.
  - Added the required column `currentStatus` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentStatus` to the `BookingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromStatus` to the `BookingItemTransition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toStatus` to the `BookingItemTransition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromStatus` to the `BookingTransition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toStatus` to the `BookingTransition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentStatus` to the `WaitlistEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromStatus` to the `WaitlistEntryTransition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toStatus` to the `WaitlistEntryTransition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "currentStatus" "BookingStatus" NOT NULL;

-- AlterTable
ALTER TABLE "BookingItem" ADD COLUMN     "currentStatus" "BookingItemStatus" NOT NULL;

-- AlterTable
ALTER TABLE "BookingItemTransition" DROP COLUMN "status",
ADD COLUMN     "fromStatus" "BookingItemStatus" NOT NULL,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "toStatus" "BookingItemStatus" NOT NULL;

-- AlterTable
ALTER TABLE "BookingTransition" DROP COLUMN "status",
ADD COLUMN     "fromStatus" "BookingStatus" NOT NULL,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "toStatus" "BookingStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "WaitlistEntry" ADD COLUMN     "currentStatus" "WaitlistStatus" NOT NULL;

-- AlterTable
ALTER TABLE "WaitlistEntryTransition" DROP COLUMN "status",
ADD COLUMN     "fromStatus" "BookingItemStatus" NOT NULL,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "toStatus" "BookingItemStatus" NOT NULL;
