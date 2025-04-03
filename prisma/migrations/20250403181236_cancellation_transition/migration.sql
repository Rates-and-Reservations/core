/*
  Warnings:

  - You are about to drop the column `status` on the `CancellationRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CancellationRequest" DROP COLUMN "status",
ADD COLUMN     "currentStatus" "CancellationStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "CancellationRequestTransition" (
    "id" TEXT NOT NULL,
    "cancellationRequestId" TEXT NOT NULL,
    "fromStatus" "CancellationStatus" NOT NULL,
    "toStatus" "CancellationStatus" NOT NULL,
    "reason" TEXT,
    "notes" TEXT,
    "metadata" JSONB,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CancellationRequestTransition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CancellationRequestTransition" ADD CONSTRAINT "CancellationRequestTransition_cancellationRequestId_fkey" FOREIGN KEY ("cancellationRequestId") REFERENCES "CancellationRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
