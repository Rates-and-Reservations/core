/*
  Warnings:

  - You are about to drop the column `revoked` on the `ApiKey` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[keyHash]` on the table `ApiKey` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `ApiKey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApiKey" DROP COLUMN "revoked",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "label" TEXT,
ADD COLUMN     "lastUsedAt" TIMESTAMP(3),
ADD COLUMN     "scopes" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_keyHash_key" ON "ApiKey"("keyHash");
