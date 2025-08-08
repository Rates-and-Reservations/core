/*
  Warnings:

  - You are about to alter the column `price` on the `AddOn` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `totalPrice` on the `BookingAddOn` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `unitPrice` on the `BookingAddOn` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `unitPrice` on the `BookingItemAddOn` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `totalPrice` on the `BookingItemAddOn` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to drop the column `bookingEndDate` on the `BookingRateSnapshot` table. All the data in the column will be lost.
  - You are about to drop the column `bookingStartDate` on the `BookingRateSnapshot` table. All the data in the column will be lost.
  - You are about to drop the column `usageEndDate` on the `BookingRateSnapshot` table. All the data in the column will be lost.
  - You are about to drop the column `usageStartDate` on the `BookingRateSnapshot` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `BookingRateSnapshot` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `taxAmount` on the `BookingRateSnapshot` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `refundAmount` on the `CancellationPolicy` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `refundAmount` on the `CancellationRequest` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `amount` on the `Discount` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `subtotal` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `taxAmount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `discountAmount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `totalAmount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `amount` on the `InvoiceItem` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `amountPaid` on the `InvoicePayment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `amount` on the `PaymentActions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `refundedAmount` on the `PaymentActions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to drop the column `bookingEndDate` on the `Rate` table. All the data in the column will be lost.
  - You are about to drop the column `bookingStartDate` on the `Rate` table. All the data in the column will be lost.
  - You are about to drop the column `usageEndDate` on the `Rate` table. All the data in the column will be lost.
  - You are about to drop the column `usageStartDate` on the `Rate` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Rate` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `taxAmount` on the `Rate` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `amount` on the `RefundLog` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `amount` on the `RefundRequest` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to drop the column `bufferTime` on the `ResourceBookingConfig` table. All the data in the column will be lost.
  - You are about to drop the column `maxDuration` on the `ResourceBookingConfig` table. All the data in the column will be lost.
  - You are about to drop the column `minDuration` on the `ResourceBookingConfig` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[apiKeyId,date]` on the table `ApiUsageStat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clientId]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[merchantId,appId]` on the table `AppInstall` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appInstallId,scopeId]` on the table `AppInstallScope` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `AppScope` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookingRequestId,bookingActionId]` on the table `BookingRequestActionValue` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[merchantId,email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Discount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[publicId]` on the table `MerchantAsset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[merchantId,userId]` on the table `MerchantUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[merchantId,type,channel]` on the table `NotificationTemplate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accessToken]` on the table `OAuthToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[refreshToken]` on the table `OAuthToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appId,merchantId]` on the table `OAuthToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rateId,addOnId]` on the table `RateAddOn` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[resourceId,assetId]` on the table `ResourceAsset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[resourceId]` on the table `ResourceBookingConfig` will be added. If there are existing duplicate values, this will fail.
  - Made the column `performedAt` on table `AuditLog` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `basePrice` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rateId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resourceId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Made the column `performedAt` on table `BookingActivityLog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "AddOn" DROP CONSTRAINT "AddOn_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "ApiKey" DROP CONSTRAINT "ApiKey_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "ApiUsageLog" DROP CONSTRAINT "ApiUsageLog_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "ApiUsageStat" DROP CONSTRAINT "ApiUsageStat_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "AppInstall" DROP CONSTRAINT "AppInstall_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "AppInstallScope" DROP CONSTRAINT "AppInstallScope_appInstallId_fkey";

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingAction" DROP CONSTRAINT "BookingAction_bookingTemplateId_fkey";

-- DropForeignKey
ALTER TABLE "BookingActivityLog" DROP CONSTRAINT "BookingActivityLog_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingAddOn" DROP CONSTRAINT "BookingAddOn_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "BookingItem" DROP CONSTRAINT "BookingItem_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "BookingItemAddOn" DROP CONSTRAINT "BookingItemAddOn_bookingItemId_fkey";

-- DropForeignKey
ALTER TABLE "BookingItemTransition" DROP CONSTRAINT "BookingItemTransition_bookingItemId_fkey";

-- DropForeignKey
ALTER TABLE "BookingRequest" DROP CONSTRAINT "BookingRequest_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingRequestActionValue" DROP CONSTRAINT "BookingRequestActionValue_bookingActionId_fkey";

-- DropForeignKey
ALTER TABLE "BookingRequestActionValue" DROP CONSTRAINT "BookingRequestActionValue_bookingRequestId_fkey";

-- DropForeignKey
ALTER TABLE "BookingRequestFlow" DROP CONSTRAINT "BookingRequestFlow_bookingRequestId_fkey";

-- DropForeignKey
ALTER TABLE "BookingRequestFlow" DROP CONSTRAINT "BookingRequestFlow_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingTemplate" DROP CONSTRAINT "BookingTemplate_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "BookingTransition" DROP CONSTRAINT "BookingTransition_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "CancellationPolicy" DROP CONSTRAINT "CancellationPolicy_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "CancellationRequest" DROP CONSTRAINT "CancellationRequest_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "CancellationRequestTransition" DROP CONSTRAINT "CancellationRequestTransition_cancellationRequestId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Discount" DROP CONSTRAINT "Discount_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceHistory" DROP CONSTRAINT "InvoiceHistory_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceItem" DROP CONSTRAINT "InvoiceItem_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoicePayment" DROP CONSTRAINT "InvoicePayment_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "MerchantAsset" DROP CONSTRAINT "MerchantAsset_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "MerchantContact" DROP CONSTRAINT "MerchantContact_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "MerchantUser" DROP CONSTRAINT "MerchantUser_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationLog" DROP CONSTRAINT "NotificationLog_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "OAuthToken" DROP CONSTRAINT "OAuthToken_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentActions" DROP CONSTRAINT "PaymentActions_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentActions" DROP CONSTRAINT "PaymentActions_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "RateAddOn" DROP CONSTRAINT "RateAddOn_addOnId_fkey";

-- DropForeignKey
ALTER TABLE "RateAddOn" DROP CONSTRAINT "RateAddOn_rateId_fkey";

-- DropForeignKey
ALTER TABLE "RefundLog" DROP CONSTRAINT "RefundLog_refundRequestId_fkey";

-- DropForeignKey
ALTER TABLE "RefundRequest" DROP CONSTRAINT "RefundRequest_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_templateId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAsset" DROP CONSTRAINT "ResourceAsset_assetId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceAsset" DROP CONSTRAINT "ResourceAsset_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceBookingConfig" DROP CONSTRAINT "ResourceBookingConfig_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceTemplate" DROP CONSTRAINT "ResourceTemplate_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "UiTemplate" DROP CONSTRAINT "UiTemplate_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "WaitlistEntry" DROP CONSTRAINT "WaitlistEntry_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "WaitlistEntryTransition" DROP CONSTRAINT "WaitlistEntryTransition_waitlistEntryId_fkey";

-- DropForeignKey
ALTER TABLE "WebhookEndpoint" DROP CONSTRAINT "WebhookEndpoint_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "WebhookEvent" DROP CONSTRAINT "WebhookEvent_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "WebhookEventLog" DROP CONSTRAINT "WebhookEventLog_eventId_fkey";

-- AlterTable
ALTER TABLE "AddOn" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "currency" SET DEFAULT 'GBP';

-- AlterTable
ALTER TABLE "ApiUsageStat" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "AuditLog" ALTER COLUMN "performedAt" SET NOT NULL,
ALTER COLUMN "performedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "basePrice" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'GBP',
ADD COLUMN     "rateId" TEXT NOT NULL,
ADD COLUMN     "resourceId" TEXT NOT NULL,
ADD COLUMN     "taxAmount" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "totalPrice" DECIMAL(10,2) NOT NULL,
ALTER COLUMN "currentStatus" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "BookingActivityLog" ALTER COLUMN "performedAt" SET NOT NULL,
ALTER COLUMN "performedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "BookingAddOn" ALTER COLUMN "totalPrice" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "unitPrice" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "BookingItemAddOn" ALTER COLUMN "unitPrice" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "totalPrice" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "BookingRateSnapshot" DROP COLUMN "bookingEndDate",
DROP COLUMN "bookingStartDate",
DROP COLUMN "usageEndDate",
DROP COLUMN "usageStartDate",
ADD COLUMN     "validFrom" TIMESTAMP(3),
ADD COLUMN     "validTo" TIMESTAMP(3),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "taxAmount" SET DATA TYPE DECIMAL(5,2);

-- AlterTable
ALTER TABLE "CancellationPolicy" ALTER COLUMN "refundAmount" SET DATA TYPE DECIMAL(5,2);

-- AlterTable
ALTER TABLE "CancellationRequest" ALTER COLUMN "refundAmount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Discount" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "currency" SET DEFAULT 'GBP',
ALTER COLUMN "subtotal" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "taxAmount" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "discountAmount" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "totalAmount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "InvoiceItem" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "InvoicePayment" ALTER COLUMN "amountPaid" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "PaymentActions" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "refundedAmount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Rate" DROP COLUMN "bookingEndDate",
DROP COLUMN "bookingStartDate",
DROP COLUMN "usageEndDate",
DROP COLUMN "usageStartDate",
ADD COLUMN     "validFrom" TIMESTAMP(3),
ADD COLUMN     "validTo" TIMESTAMP(3),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "currency" SET DEFAULT 'GBP',
ALTER COLUMN "durationType" SET DEFAULT 'PER_HOUR',
ALTER COLUMN "taxAmount" SET DATA TYPE DECIMAL(5,2);

-- AlterTable
ALTER TABLE "RefundLog" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "currency" SET DEFAULT 'GBP';

-- AlterTable
ALTER TABLE "RefundRequest" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "currency" SET DEFAULT 'GBP';

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "bufferTime" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "maxDuration" INTEGER NOT NULL DEFAULT 480,
ADD COLUMN     "minDuration" INTEGER NOT NULL DEFAULT 60,
ALTER COLUMN "templateId" DROP NOT NULL,
ALTER COLUMN "capacity" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "ResourceBookingConfig" DROP COLUMN "bufferTime",
DROP COLUMN "maxDuration",
DROP COLUMN "minDuration";

-- AlterTable
ALTER TABLE "WaitlistEntry" ALTER COLUMN "currentStatus" SET DEFAULT 'ACTIVE';

-- CreateIndex
CREATE INDEX "AddOn_merchantId_isActive_idx" ON "AddOn"("merchantId", "isActive");

-- CreateIndex
CREATE INDEX "ApiKey_merchantId_isActive_idx" ON "ApiKey"("merchantId", "isActive");

-- CreateIndex
CREATE INDEX "ApiKey_keyHash_idx" ON "ApiKey"("keyHash");

-- CreateIndex
CREATE INDEX "ApiKey_lastUsedAt_idx" ON "ApiKey"("lastUsedAt");

-- CreateIndex
CREATE INDEX "ApiUsageLog_merchantId_createdAt_idx" ON "ApiUsageLog"("merchantId", "createdAt");

-- CreateIndex
CREATE INDEX "ApiUsageLog_apiKeyId_createdAt_idx" ON "ApiUsageLog"("apiKeyId", "createdAt");

-- CreateIndex
CREATE INDEX "ApiUsageLog_endpoint_method_idx" ON "ApiUsageLog"("endpoint", "method");

-- CreateIndex
CREATE INDEX "ApiUsageStat_merchantId_date_idx" ON "ApiUsageStat"("merchantId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "ApiUsageStat_apiKeyId_date_key" ON "ApiUsageStat"("apiKeyId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "App_clientId_key" ON "App"("clientId");

-- CreateIndex
CREATE INDEX "App_merchantId_idx" ON "App"("merchantId");

-- CreateIndex
CREATE INDEX "App_isPublic_isPublished_idx" ON "App"("isPublic", "isPublished");

-- CreateIndex
CREATE INDEX "AppInstall_merchantId_status_idx" ON "AppInstall"("merchantId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "AppInstall_merchantId_appId_key" ON "AppInstall"("merchantId", "appId");

-- CreateIndex
CREATE UNIQUE INDEX "AppInstallScope_appInstallId_scopeId_key" ON "AppInstallScope"("appInstallId", "scopeId");

-- CreateIndex
CREATE UNIQUE INDEX "AppScope_name_key" ON "AppScope"("name");

-- CreateIndex
CREATE INDEX "AuditLog_merchantId_performedAt_idx" ON "AuditLog"("merchantId", "performedAt");

-- CreateIndex
CREATE INDEX "AuditLog_resourceType_resourceId_idx" ON "AuditLog"("resourceType", "resourceId");

-- CreateIndex
CREATE INDEX "AuditLog_action_idx" ON "AuditLog"("action");

-- CreateIndex
CREATE INDEX "Booking_merchantId_currentStatus_idx" ON "Booking"("merchantId", "currentStatus");

-- CreateIndex
CREATE INDEX "Booking_merchantId_startTime_endTime_idx" ON "Booking"("merchantId", "startTime", "endTime");

-- CreateIndex
CREATE INDEX "Booking_resourceId_startTime_endTime_idx" ON "Booking"("resourceId", "startTime", "endTime");

-- CreateIndex
CREATE INDEX "Booking_customerId_idx" ON "Booking"("customerId");

-- CreateIndex
CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");

-- CreateIndex
CREATE INDEX "BookingAction_bookingTemplateId_idx" ON "BookingAction"("bookingTemplateId");

-- CreateIndex
CREATE INDEX "BookingActivityLog_merchantId_performedAt_idx" ON "BookingActivityLog"("merchantId", "performedAt");

-- CreateIndex
CREATE INDEX "BookingActivityLog_bookingId_performedAt_idx" ON "BookingActivityLog"("bookingId", "performedAt");

-- CreateIndex
CREATE INDEX "BookingActivityLog_action_idx" ON "BookingActivityLog"("action");

-- CreateIndex
CREATE INDEX "BookingAddOn_bookingId_idx" ON "BookingAddOn"("bookingId");

-- CreateIndex
CREATE INDEX "BookingItem_bookingId_idx" ON "BookingItem"("bookingId");

-- CreateIndex
CREATE INDEX "BookingItem_startTime_endTime_idx" ON "BookingItem"("startTime", "endTime");

-- CreateIndex
CREATE INDEX "BookingItemAddOn_bookingItemId_idx" ON "BookingItemAddOn"("bookingItemId");

-- CreateIndex
CREATE INDEX "BookingItemTransition_bookingItemId_idx" ON "BookingItemTransition"("bookingItemId");

-- CreateIndex
CREATE INDEX "BookingItemTransition_createdAt_idx" ON "BookingItemTransition"("createdAt");

-- CreateIndex
CREATE INDEX "BookingRateSnapshot_rateId_idx" ON "BookingRateSnapshot"("rateId");

-- CreateIndex
CREATE INDEX "BookingRequest_merchantId_status_idx" ON "BookingRequest"("merchantId", "status");

-- CreateIndex
CREATE INDEX "BookingRequest_templateId_idx" ON "BookingRequest"("templateId");

-- CreateIndex
CREATE INDEX "BookingRequest_customerId_idx" ON "BookingRequest"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "BookingRequestActionValue_bookingRequestId_bookingActionId_key" ON "BookingRequestActionValue"("bookingRequestId", "bookingActionId");

-- CreateIndex
CREATE INDEX "BookingRequestFlow_slug_idx" ON "BookingRequestFlow"("slug");

-- CreateIndex
CREATE INDEX "BookingRequestFlow_merchantId_idx" ON "BookingRequestFlow"("merchantId");

-- CreateIndex
CREATE INDEX "BookingTemplate_merchantId_idx" ON "BookingTemplate"("merchantId");

-- CreateIndex
CREATE INDEX "BookingTransition_bookingId_idx" ON "BookingTransition"("bookingId");

-- CreateIndex
CREATE INDEX "BookingTransition_createdAt_idx" ON "BookingTransition"("createdAt");

-- CreateIndex
CREATE INDEX "CancellationPolicy_merchantId_idx" ON "CancellationPolicy"("merchantId");

-- CreateIndex
CREATE INDEX "CancellationRequest_bookingId_idx" ON "CancellationRequest"("bookingId");

-- CreateIndex
CREATE INDEX "CancellationRequest_currentStatus_idx" ON "CancellationRequest"("currentStatus");

-- CreateIndex
CREATE INDEX "CancellationRequestTransition_cancellationRequestId_idx" ON "CancellationRequestTransition"("cancellationRequestId");

-- CreateIndex
CREATE INDEX "Customer_merchantId_email_idx" ON "Customer"("merchantId", "email");

-- CreateIndex
CREATE INDEX "Customer_merchantId_isDeleted_idx" ON "Customer"("merchantId", "isDeleted");

-- CreateIndex
CREATE INDEX "Customer_email_idx" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_merchantId_email_key" ON "Customer"("merchantId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_code_key" ON "Discount"("code");

-- CreateIndex
CREATE INDEX "Discount_merchantId_isActive_idx" ON "Discount"("merchantId", "isActive");

-- CreateIndex
CREATE INDEX "Discount_code_idx" ON "Discount"("code");

-- CreateIndex
CREATE INDEX "Discount_startDate_endDate_idx" ON "Discount"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "Invoice_merchantId_status_idx" ON "Invoice"("merchantId", "status");

-- CreateIndex
CREATE INDEX "Invoice_invoiceNumber_idx" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Invoice_customerId_idx" ON "Invoice"("customerId");

-- CreateIndex
CREATE INDEX "InvoiceHistory_invoiceId_idx" ON "InvoiceHistory"("invoiceId");

-- CreateIndex
CREATE INDEX "InvoiceItem_invoiceId_idx" ON "InvoiceItem"("invoiceId");

-- CreateIndex
CREATE INDEX "InvoicePayment_invoiceId_idx" ON "InvoicePayment"("invoiceId");

-- CreateIndex
CREATE INDEX "InvoicePayment_paymentId_idx" ON "InvoicePayment"("paymentId");

-- CreateIndex
CREATE INDEX "Merchant_ownerId_idx" ON "Merchant"("ownerId");

-- CreateIndex
CREATE INDEX "Merchant_isActive_isDeleted_idx" ON "Merchant"("isActive", "isDeleted");

-- CreateIndex
CREATE INDEX "Merchant_country_industry_idx" ON "Merchant"("country", "industry");

-- CreateIndex
CREATE UNIQUE INDEX "MerchantAsset_publicId_key" ON "MerchantAsset"("publicId");

-- CreateIndex
CREATE INDEX "MerchantAsset_merchantId_type_idx" ON "MerchantAsset"("merchantId", "type");

-- CreateIndex
CREATE INDEX "MerchantAsset_publicId_idx" ON "MerchantAsset"("publicId");

-- CreateIndex
CREATE INDEX "MerchantContact_merchantId_isDefault_idx" ON "MerchantContact"("merchantId", "isDefault");

-- CreateIndex
CREATE INDEX "MerchantContact_email_idx" ON "MerchantContact"("email");

-- CreateIndex
CREATE INDEX "MerchantUser_userId_idx" ON "MerchantUser"("userId");

-- CreateIndex
CREATE INDEX "MerchantUser_merchantId_role_idx" ON "MerchantUser"("merchantId", "role");

-- CreateIndex
CREATE INDEX "MerchantUser_merchantId_isActive_idx" ON "MerchantUser"("merchantId", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "MerchantUser_merchantId_userId_key" ON "MerchantUser"("merchantId", "userId");

-- CreateIndex
CREATE INDEX "Notification_merchantId_type_idx" ON "Notification"("merchantId", "type");

-- CreateIndex
CREATE INDEX "Notification_bookingId_idx" ON "Notification"("bookingId");

-- CreateIndex
CREATE INDEX "Notification_customerId_idx" ON "Notification"("customerId");

-- CreateIndex
CREATE INDEX "Notification_recipient_idx" ON "Notification"("recipient");

-- CreateIndex
CREATE INDEX "NotificationLog_notificationId_idx" ON "NotificationLog"("notificationId");

-- CreateIndex
CREATE INDEX "NotificationTemplate_merchantId_type_idx" ON "NotificationTemplate"("merchantId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationTemplate_merchantId_type_channel_key" ON "NotificationTemplate"("merchantId", "type", "channel");

-- CreateIndex
CREATE UNIQUE INDEX "OAuthToken_accessToken_key" ON "OAuthToken"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "OAuthToken_refreshToken_key" ON "OAuthToken"("refreshToken");

-- CreateIndex
CREATE INDEX "OAuthToken_accessToken_idx" ON "OAuthToken"("accessToken");

-- CreateIndex
CREATE INDEX "OAuthToken_expiresAt_idx" ON "OAuthToken"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "OAuthToken_appId_merchantId_key" ON "OAuthToken"("appId", "merchantId");

-- CreateIndex
CREATE INDEX "PaymentActions_merchantId_status_idx" ON "PaymentActions"("merchantId", "status");

-- CreateIndex
CREATE INDEX "PaymentActions_bookingId_idx" ON "PaymentActions"("bookingId");

-- CreateIndex
CREATE INDEX "PaymentActions_providerPaymentId_idx" ON "PaymentActions"("providerPaymentId");

-- CreateIndex
CREATE INDEX "PaymentActions_createdAt_idx" ON "PaymentActions"("createdAt");

-- CreateIndex
CREATE INDEX "Rate_resourceId_isActive_isPublished_idx" ON "Rate"("resourceId", "isActive", "isPublished");

-- CreateIndex
CREATE INDEX "Rate_merchantId_isActive_idx" ON "Rate"("merchantId", "isActive");

-- CreateIndex
CREATE INDEX "Rate_validFrom_validTo_idx" ON "Rate"("validFrom", "validTo");

-- CreateIndex
CREATE INDEX "Rate_price_idx" ON "Rate"("price");

-- CreateIndex
CREATE UNIQUE INDEX "RateAddOn_rateId_addOnId_key" ON "RateAddOn"("rateId", "addOnId");

-- CreateIndex
CREATE INDEX "RefundLog_refundRequestId_idx" ON "RefundLog"("refundRequestId");

-- CreateIndex
CREATE INDEX "RefundLog_providerRefundId_idx" ON "RefundLog"("providerRefundId");

-- CreateIndex
CREATE INDEX "RefundRequest_merchantId_status_idx" ON "RefundRequest"("merchantId", "status");

-- CreateIndex
CREATE INDEX "RefundRequest_bookingId_idx" ON "RefundRequest"("bookingId");

-- CreateIndex
CREATE INDEX "Resource_merchantId_isActive_isDeleted_idx" ON "Resource"("merchantId", "isActive", "isDeleted");

-- CreateIndex
CREATE INDEX "Resource_merchantId_capacity_idx" ON "Resource"("merchantId", "capacity");

-- CreateIndex
CREATE INDEX "Resource_tags_idx" ON "Resource"("tags");

-- CreateIndex
CREATE INDEX "ResourceAsset_resourceId_isPrimary_idx" ON "ResourceAsset"("resourceId", "isPrimary");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceAsset_resourceId_assetId_key" ON "ResourceAsset"("resourceId", "assetId");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceBookingConfig_resourceId_key" ON "ResourceBookingConfig"("resourceId");

-- CreateIndex
CREATE INDEX "ResourceTemplate_category_idx" ON "ResourceTemplate"("category");

-- CreateIndex
CREATE INDEX "ResourceTemplate_merchantId_idx" ON "ResourceTemplate"("merchantId");

-- CreateIndex
CREATE INDEX "UiTemplate_merchantId_idx" ON "UiTemplate"("merchantId");

-- CreateIndex
CREATE INDEX "UiTemplate_isSystem_idx" ON "UiTemplate"("isSystem");

-- CreateIndex
CREATE INDEX "WaitlistEntry_merchantId_resourceId_currentStatus_idx" ON "WaitlistEntry"("merchantId", "resourceId", "currentStatus");

-- CreateIndex
CREATE INDEX "WaitlistEntry_priority_idx" ON "WaitlistEntry"("priority");

-- CreateIndex
CREATE INDEX "WaitlistEntryTransition_waitlistEntryId_idx" ON "WaitlistEntryTransition"("waitlistEntryId");

-- CreateIndex
CREATE INDEX "WebhookEndpoint_merchantId_isActive_idx" ON "WebhookEndpoint"("merchantId", "isActive");

-- CreateIndex
CREATE INDEX "WebhookEvent_merchantId_status_idx" ON "WebhookEvent"("merchantId", "status");

-- CreateIndex
CREATE INDEX "WebhookEvent_endpointId_status_idx" ON "WebhookEvent"("endpointId", "status");

-- CreateIndex
CREATE INDEX "WebhookEvent_nextRetryAt_idx" ON "WebhookEvent"("nextRetryAt");

-- CreateIndex
CREATE INDEX "WebhookEventLog_eventId_idx" ON "WebhookEventLog"("eventId");

-- CreateIndex
CREATE INDEX "WebhookEventLog_sentAt_idx" ON "WebhookEventLog"("sentAt");

-- AddForeignKey
ALTER TABLE "MerchantContact" ADD CONSTRAINT "MerchantContact_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MerchantUser" ADD CONSTRAINT "MerchantUser_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MerchantAsset" ADD CONSTRAINT "MerchantAsset_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "ResourceTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentActions" ADD CONSTRAINT "PaymentActions_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentActions" ADD CONSTRAINT "PaymentActions_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceTemplate" ADD CONSTRAINT "ResourceTemplate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceBookingConfig" ADD CONSTRAINT "ResourceBookingConfig_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddOn" ADD CONSTRAINT "AddOn_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAsset" ADD CONSTRAINT "ResourceAsset_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceAsset" ADD CONSTRAINT "ResourceAsset_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MerchantAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discount" ADD CONSTRAINT "Discount_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RateAddOn" ADD CONSTRAINT "RateAddOn_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RateAddOn" ADD CONSTRAINT "RateAddOn_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTemplate" ADD CONSTRAINT "BookingTemplate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAction" ADD CONSTRAINT "BookingAction_bookingTemplateId_fkey" FOREIGN KEY ("bookingTemplateId") REFERENCES "BookingTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UiTemplate" ADD CONSTRAINT "UiTemplate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequest" ADD CONSTRAINT "BookingRequest_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestActionValue" ADD CONSTRAINT "BookingRequestActionValue_bookingRequestId_fkey" FOREIGN KEY ("bookingRequestId") REFERENCES "BookingRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestActionValue" ADD CONSTRAINT "BookingRequestActionValue_bookingActionId_fkey" FOREIGN KEY ("bookingActionId") REFERENCES "BookingAction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestFlow" ADD CONSTRAINT "BookingRequestFlow_bookingRequestId_fkey" FOREIGN KEY ("bookingRequestId") REFERENCES "BookingRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRequestFlow" ADD CONSTRAINT "BookingRequestFlow_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItem" ADD CONSTRAINT "BookingItem_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItemAddOn" ADD CONSTRAINT "BookingItemAddOn_bookingItemId_fkey" FOREIGN KEY ("bookingItemId") REFERENCES "BookingItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItemTransition" ADD CONSTRAINT "BookingItemTransition_bookingItemId_fkey" FOREIGN KEY ("bookingItemId") REFERENCES "BookingItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAddOn" ADD CONSTRAINT "BookingAddOn_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTransition" ADD CONSTRAINT "BookingTransition_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationPolicy" ADD CONSTRAINT "CancellationPolicy_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationRequest" ADD CONSTRAINT "CancellationRequest_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancellationRequestTransition" ADD CONSTRAINT "CancellationRequestTransition_cancellationRequestId_fkey" FOREIGN KEY ("cancellationRequestId") REFERENCES "CancellationRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaitlistEntry" ADD CONSTRAINT "WaitlistEntry_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaitlistEntryTransition" ADD CONSTRAINT "WaitlistEntryTransition_waitlistEntryId_fkey" FOREIGN KEY ("waitlistEntryId") REFERENCES "WaitlistEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceHistory" ADD CONSTRAINT "InvoiceHistory_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoicePayment" ADD CONSTRAINT "InvoicePayment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefundRequest" ADD CONSTRAINT "RefundRequest_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefundLog" ADD CONSTRAINT "RefundLog_refundRequestId_fkey" FOREIGN KEY ("refundRequestId") REFERENCES "RefundRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationLog" ADD CONSTRAINT "NotificationLog_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiUsageLog" ADD CONSTRAINT "ApiUsageLog_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiUsageStat" ADD CONSTRAINT "ApiUsageStat_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingActivityLog" ADD CONSTRAINT "BookingActivityLog_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebhookEndpoint" ADD CONSTRAINT "WebhookEndpoint_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebhookEvent" ADD CONSTRAINT "WebhookEvent_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebhookEventLog" ADD CONSTRAINT "WebhookEventLog_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "WebhookEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppInstall" ADD CONSTRAINT "AppInstall_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppInstallScope" ADD CONSTRAINT "AppInstallScope_appInstallId_fkey" FOREIGN KEY ("appInstallId") REFERENCES "AppInstall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthToken" ADD CONSTRAINT "OAuthToken_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
