/*
  Warnings:

  - Added the required column `businessType` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `industry` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tradingName` to the `Merchant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('SOLE_TRADER', 'LIMITED_COMPANY', 'PARTNERSHIP');

-- AlterTable
ALTER TABLE "Merchant" ADD COLUMN     "businessType" "BusinessType" NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "industry" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "tradingName" TEXT NOT NULL,
ADD COLUMN     "vatNumber" TEXT;

-- CreateTable
CREATE TABLE "MerchantContact" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MerchantContact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MerchantContact" ADD CONSTRAINT "MerchantContact_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
