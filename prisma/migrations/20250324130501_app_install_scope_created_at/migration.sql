/*
  Warnings:

  - You are about to drop the column `grantedAt` on the `AppInstallScope` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AppInstallScope" DROP COLUMN "grantedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
