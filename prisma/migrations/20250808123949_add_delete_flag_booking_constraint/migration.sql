/*
  Warnings:

  - The primary key for the `_DiscountToRate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_DiscountToRate` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "BookingConstraint" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "_DiscountToRate" DROP CONSTRAINT "_DiscountToRate_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountToRate_AB_unique" ON "_DiscountToRate"("A", "B");
