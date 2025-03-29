/*
  Warnings:

  - You are about to drop the `CancellationItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CancellationItem" DROP CONSTRAINT "CancellationItem_bookingItemId_fkey";

-- DropForeignKey
ALTER TABLE "CancellationItem" DROP CONSTRAINT "CancellationItem_cancellationRequestId_fkey";

-- AlterTable
ALTER TABLE "CancellationRequest" ADD COLUMN     "bookingItemId" TEXT;

-- DropTable
DROP TABLE "CancellationItem";

-- DropEnum
DROP TYPE "CancellationItemStatus";

-- AddForeignKey
ALTER TABLE "CancellationRequest" ADD CONSTRAINT "CancellationRequest_bookingItemId_fkey" FOREIGN KEY ("bookingItemId") REFERENCES "BookingItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
