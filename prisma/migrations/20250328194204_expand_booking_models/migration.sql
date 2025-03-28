/*
  Warnings:

  - You are about to drop the column `currency` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `discountAmount` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `paymentId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `paymentStatus` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `rateId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `rateName` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `ratePrice` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `resourceId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `resourceName` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `resourceType` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `taxAmount` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `autoConfirm` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `cancellationPolicy` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `rateId` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `refundWindowHours` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `requirePayment` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `BookingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `cancellationPolicy` on the `ResourceBookingConfig` table. All the data in the column will be lost.
  - You are about to drop the column `refundWindowHours` on the `ResourceBookingConfig` table. All the data in the column will be lost.
  - You are about to drop the `BookingPage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookingPageTemplate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addOnName` to the `BookingAddOn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `BookingAddOn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actionStatus` to the `BookingRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `BookingRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `templateId` to the `BookingRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uiTemplateId` to the `BookingRequestFlow` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SelectionMode" AS ENUM ('SINGLE', 'MULTI');

-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('DATE_SELECT', 'RESOURCE_SELECT', 'CUSTOMER_DETAILS', 'ADD_ON_SELECT', 'INPUT_FIELD', 'PAYMENT_SELECT');

-- CreateEnum
CREATE TYPE "BookingRequestStatus" AS ENUM ('INITIATED', 'IN_PROGRESS', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "BookingItemStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED', 'FAILED', 'WAITLISTED', 'IN_USE');

-- CreateEnum
CREATE TYPE "RefundType" AS ENUM ('FULL', 'PARTIAL', 'NONE');

-- CreateEnum
CREATE TYPE "CancellationScope" AS ENUM ('BOOKING', 'ITEM');

-- CreateEnum
CREATE TYPE "CancellationItemStatus" AS ENUM ('PENDING', 'CANCELLED', 'NOT_CANCELLED');

-- CreateEnum
CREATE TYPE "CancellationStatus" AS ENUM ('PENDING', 'APPROVED', 'DECLINED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CancellationSource" AS ENUM ('CUSTOMER', 'SUPPORT', 'SYSTEM');

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_rateId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "BookingAddOn" DROP CONSTRAINT "BookingAddOn_addOnId_fkey";

-- DropForeignKey
ALTER TABLE "BookingPage" DROP CONSTRAINT "BookingPage_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingPage" DROP CONSTRAINT "BookingPage_templateId_fkey";

-- DropForeignKey
ALTER TABLE "BookingPageTemplate" DROP CONSTRAINT "BookingPageTemplate_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingRequest" DROP CONSTRAINT "BookingRequest_rateId_fkey";

-- AlterTable
ALTER TABLE "App" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "performedAt" TIMESTAMP(3),
ADD COLUMN     "performedBy" TEXT;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "currency",
DROP COLUMN "discountAmount",
DROP COLUMN "location",
DROP COLUMN "paymentId",
DROP COLUMN "paymentStatus",
DROP COLUMN "rateId",
DROP COLUMN "rateName",
DROP COLUMN "ratePrice",
DROP COLUMN "resourceId",
DROP COLUMN "resourceName",
DROP COLUMN "resourceType",
DROP COLUMN "taxAmount",
DROP COLUMN "totalAmount",
ADD COLUMN     "bookingRequestId" TEXT;

-- AlterTable
ALTER TABLE "BookingActivityLog" ADD COLUMN     "performedAt" TIMESTAMP(3),
ADD COLUMN     "performedBy" TEXT;

-- AlterTable
ALTER TABLE "BookingAddOn" ADD COLUMN     "addOnName" TEXT NOT NULL,
ADD COLUMN     "unitPrice" DECIMAL(65,30) NOT NULL,
ALTER COLUMN "addOnId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BookingRequest" DROP COLUMN "autoConfirm",
DROP COLUMN "cancellationPolicy",
DROP COLUMN "endTime",
DROP COLUMN "rateId",
DROP COLUMN "refundWindowHours",
DROP COLUMN "requirePayment",
DROP COLUMN "startTime",
ADD COLUMN     "actionStatus" JSONB NOT NULL,
ADD COLUMN     "finalizedSnapshot" JSONB,
ADD COLUMN     "prefilledFields" JSONB,
ADD COLUMN     "status" "BookingRequestStatus" NOT NULL,
ADD COLUMN     "templateId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BookingRequestFlow" ADD COLUMN     "uiTemplateId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MerchantContact" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "notificationTemplateId" TEXT;

-- AlterTable
ALTER TABLE "Rate" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "orderIndex" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "ResourceBookingConfig" DROP COLUMN "cancellationPolicy",
DROP COLUMN "refundWindowHours",
ADD COLUMN     "cancellationPolicyId" TEXT;

-- DropTable
DROP TABLE "BookingPage";

-- DropTable
DROP TABLE "BookingPageTemplate";

-- DropEnum
DROP TYPE "CancellationPolicy";

-- CreateTable
CREATE TABLE "ResourceAsset" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingTemplate" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "selectionMode" "SelectionMode" NOT NULL,
    "config" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingAction" (
    "id" TEXT NOT NULL,
    "bookingTemplateId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ActionType" NOT NULL,
    "config" JSONB NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "BookingAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UiTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "previewImageUrl" TEXT,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "merchantId" TEXT,
    "config" JSONB NOT NULL,
    "uiTheme" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UiTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingRequestActionValue" (
    "id" TEXT NOT NULL,
    "bookingRequestId" TEXT NOT NULL,
    "bookingActionId" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookingRequestActionValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingItem" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "bookingRateSnapshotId" TEXT NOT NULL,
    "status" "BookingItemStatus" NOT NULL DEFAULT 'CONFIRMED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingItemAddOn" (
    "id" TEXT NOT NULL,
    "bookingItemId" TEXT NOT NULL,
    "addOnId" TEXT NOT NULL,
    "addOnName" TEXT NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingItemAddOn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingRateSnapshot" (
    "id" TEXT NOT NULL,
    "rateId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "durationType" "RateDurationType" NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "bookingStartDate" TIMESTAMP(3),
    "bookingEndDate" TIMESTAMP(3),
    "usageStartDate" TIMESTAMP(3),
    "usageEndDate" TIMESTAMP(3),
    "taxType" "TaxType" NOT NULL DEFAULT 'PERCENTAGE',
    "taxAmount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingRateSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CancellationPolicy" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "refundType" "RefundType" NOT NULL,
    "refundAmount" DECIMAL(65,30),
    "timeLimitHours" INTEGER,
    "appliesTo" "CancellationScope" NOT NULL DEFAULT 'BOOKING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CancellationPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CancellationRequest" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "requestedBy" TEXT,
    "reason" TEXT,
    "source" "CancellationSource" NOT NULL DEFAULT 'CUSTOMER',
    "status" "CancellationStatus" NOT NULL DEFAULT 'PENDING',
    "processedAt" TIMESTAMP(3),
    "approvedBy" TEXT,
    "approvedAt" TIMESTAMP(3),
    "declinedAt" TIMESTAMP(3),
    "refundAmount" DECIMAL(65,30),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CancellationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CancellationItem" (
    "id" TEXT NOT NULL,
    "cancellationRequestId" TEXT NOT NULL,
    "bookingItemId" TEXT NOT NULL,
    "status" "CancellationItemStatus" NOT NULL DEFAULT 'PENDING',
    "refundAmount" DECIMAL(65,30),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CancellationItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoicePayment" (
    "id" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "amountPaid" DECIMAL(65,30) NOT NULL,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvoicePayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResourceBookingConfig" ADD CONSTRAINT "ResourceBookingConfig_cancellationPolicyId_fkey" FOREIGN KEY ("cancellationPolicyId") REFERENCES "CancellationPolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAsset" ADD CONSTRAINT "ResourceAsset_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAsset" ADD CONSTRAINT "ResourceAsset_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MerchantAsset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTemplate" ADD CONSTRAINT "BookingTemplate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAction" ADD CONSTRAINT "BookingAction_bookingTemplateId_fkey" FOREIGN KEY ("bookingTemplateId") REFERENCES "BookingTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UiTemplate" ADD CONSTRAINT "UiTemplate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequest" ADD CONSTRAINT "BookingRequest_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "BookingTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestActionValue" ADD CONSTRAINT "BookingRequestActionValue_bookingActionId_fkey" FOREIGN KEY ("bookingActionId") REFERENCES "BookingAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestActionValue" ADD CONSTRAINT "BookingRequestActionValue_bookingRequestId_fkey" FOREIGN KEY ("bookingRequestId") REFERENCES "BookingRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestFlow" ADD CONSTRAINT "BookingRequestFlow_uiTemplateId_fkey" FOREIGN KEY ("uiTemplateId") REFERENCES "UiTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItem" ADD CONSTRAINT "BookingItem_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItem" ADD CONSTRAINT "BookingItem_bookingRateSnapshotId_fkey" FOREIGN KEY ("bookingRateSnapshotId") REFERENCES "BookingRateSnapshot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_bookingRequestId_fkey" FOREIGN KEY ("bookingRequestId") REFERENCES "BookingRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItemAddOn" ADD CONSTRAINT "BookingItemAddOn_bookingItemId_fkey" FOREIGN KEY ("bookingItemId") REFERENCES "BookingItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItemAddOn" ADD CONSTRAINT "BookingItemAddOn_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAddOn" ADD CONSTRAINT "BookingAddOn_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRateSnapshot" ADD CONSTRAINT "BookingRateSnapshot_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationPolicy" ADD CONSTRAINT "CancellationPolicy_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationRequest" ADD CONSTRAINT "CancellationRequest_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationItem" ADD CONSTRAINT "CancellationItem_cancellationRequestId_fkey" FOREIGN KEY ("cancellationRequestId") REFERENCES "CancellationRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationItem" ADD CONSTRAINT "CancellationItem_bookingItemId_fkey" FOREIGN KEY ("bookingItemId") REFERENCES "BookingItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoicePayment" ADD CONSTRAINT "InvoicePayment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoicePayment" ADD CONSTRAINT "InvoicePayment_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "PaymentActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_notificationTemplateId_fkey" FOREIGN KEY ("notificationTemplateId") REFERENCES "NotificationTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
