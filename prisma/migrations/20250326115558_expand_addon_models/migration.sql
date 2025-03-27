-- AlterTable
ALTER TABLE "AddOn" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "showInBooking" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "RateAddOn" (
    "id" TEXT NOT NULL,
    "rateId" TEXT NOT NULL,
    "addOnId" TEXT NOT NULL,

    CONSTRAINT "RateAddOn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingAddOn" ADD CONSTRAINT "BookingAddOn_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RateAddOn" ADD CONSTRAINT "RateAddOn_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RateAddOn" ADD CONSTRAINT "RateAddOn_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
