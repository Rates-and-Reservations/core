/*
  Warnings:

  - You are about to drop the column `status` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `BookingItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "BookingItem" DROP COLUMN "status";

-- CreateTable
CREATE TABLE "BookingItemTransition" (
    "id" TEXT NOT NULL,
    "bookingItemId" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingItemTransition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingTransition" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingTransition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingItemTransition" ADD CONSTRAINT "BookingItemTransition_bookingItemId_fkey" FOREIGN KEY ("bookingItemId") REFERENCES "BookingItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTransition" ADD CONSTRAINT "BookingTransition_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
