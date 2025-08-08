/*
  Warnings:

  - Added the required column `name` to the `Discount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `fromStatus` on the `WaitlistEntryTransition` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `toStatus` on the `WaitlistEntryTransition` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BlockType" AS ENUM ('MAINTENANCE', 'PRIVATE_EVENT', 'HOLIDAY', 'CUSTOM', 'SYSTEM_BLOCK');

-- CreateEnum
CREATE TYPE "ConstraintType" AS ENUM ('MIN_ADVANCE_BOOKING', 'MAX_ADVANCE_BOOKING', 'MAX_BOOKINGS_PER_DAY', 'MAX_BOOKINGS_PER_WEEK', 'BUFFER_TIME', 'CAPACITY_LIMIT', 'BLACKOUT_DATES', 'MINIMUM_PARTY_SIZE', 'MAXIMUM_PARTY_SIZE');

-- CreateEnum
CREATE TYPE "PricingRuleType" AS ENUM ('TIME_BASED', 'DEMAND_BASED', 'SEASONAL', 'BULK_DISCOUNT', 'LAST_MINUTE', 'EARLY_BIRD', 'LOYALTY');

-- CreateEnum
CREATE TYPE "IntegrationType" AS ENUM ('GOOGLE_CALENDAR', 'OUTLOOK_CALENDAR', 'APPLE_CALENDAR', 'ZOOM', 'GOOGLE_MEET', 'MICROSOFT_TEAMS', 'STRIPE', 'PAYPAL', 'SQUARE', 'MAILCHIMP', 'SENDGRID', 'TWILIO', 'SLACK', 'ZAPIER', 'CUSTOM_WEBHOOK');

-- CreateEnum
CREATE TYPE "ImportJobType" AS ENUM ('CUSTOMERS', 'RESOURCES', 'BOOKINGS', 'RATES', 'AVAILABILITY');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ActionType" ADD VALUE 'TIME_SELECT';
ALTER TYPE "ActionType" ADD VALUE 'TERMS_ACCEPTANCE';

-- AlterEnum
ALTER TYPE "AppInstallStatus" ADD VALUE 'ERROR';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "BookingActionType" ADD VALUE 'CHECKED_IN';
ALTER TYPE "BookingActionType" ADD VALUE 'CHECKED_OUT';
ALTER TYPE "BookingActionType" ADD VALUE 'NO_SHOW_MARKED';

-- AlterEnum
ALTER TYPE "BookingItemStatus" ADD VALUE 'NO_SHOW';

-- AlterEnum
ALTER TYPE "BookingRequestStatus" ADD VALUE 'EXPIRED';

-- AlterEnum
ALTER TYPE "BookingStatus" ADD VALUE 'NO_SHOW';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "DiscountType" ADD VALUE 'BUY_X_GET_Y';
ALTER TYPE "DiscountType" ADD VALUE 'BULK_DISCOUNT';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "InvoiceStatus" ADD VALUE 'SENT';
ALTER TYPE "InvoiceStatus" ADD VALUE 'REFUNDED';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NotificationChannel" ADD VALUE 'PUSH';
ALTER TYPE "NotificationChannel" ADD VALUE 'IN_APP';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NotificationStatus" ADD VALUE 'DELIVERED';
ALTER TYPE "NotificationStatus" ADD VALUE 'OPENED';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NotificationType" ADD VALUE 'BOOKING_UPDATED';
ALTER TYPE "NotificationType" ADD VALUE 'REFUND_PROCESSED';
ALTER TYPE "NotificationType" ADD VALUE 'REVIEW_REQUEST';
ALTER TYPE "NotificationType" ADD VALUE 'WAITLIST_NOTIFICATION';

-- AlterEnum
ALTER TYPE "PaymentStatus" ADD VALUE 'PARTIALLY_REFUNDED';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RateDurationType" ADD VALUE 'PER_WEEK';
ALTER TYPE "RateDurationType" ADD VALUE 'PER_MONTH';
ALTER TYPE "RateDurationType" ADD VALUE 'FIXED_PRICE';

-- AlterEnum
ALTER TYPE "RefundType" ADD VALUE 'SLIDING_SCALE';

-- AlterEnum
ALTER TYPE "WaitlistStatus" ADD VALUE 'EXPIRED';

-- AlterEnum
ALTER TYPE "WebhookEventStatus" ADD VALUE 'ABANDONED';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "WebhookEventType" ADD VALUE 'BOOKING_CANCELLED';
ALTER TYPE "WebhookEventType" ADD VALUE 'BOOKING_COMPLETED';
ALTER TYPE "WebhookEventType" ADD VALUE 'PAYMENT_FAILED';
ALTER TYPE "WebhookEventType" ADD VALUE 'REFUND_PROCESSED';
ALTER TYPE "WebhookEventType" ADD VALUE 'CUSTOMER_CREATED';
ALTER TYPE "WebhookEventType" ADD VALUE 'RESOURCE_UPDATED';
ALTER TYPE "WebhookEventType" ADD VALUE 'AVAILABILITY_CHANGED';
ALTER TYPE "WebhookEventType" ADD VALUE 'WAITLIST_PROMOTED';

-- DropIndex
DROP INDEX "BookingAction_bookingTemplateId_idx";

-- AlterTable
ALTER TABLE "AddOn" ADD COLUMN     "hasInventory" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "inventoryCount" INTEGER,
ADD COLUMN     "lowStockWarning" INTEGER,
ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "ApiUsageLog" ADD COLUMN     "requestSize" INTEGER,
ADD COLUMN     "responseSize" INTEGER;

-- AlterTable
ALTER TABLE "ApiUsageStat" ADD COLUMN     "averageResponseTime" DECIMAL(8,2),
ADD COLUMN     "totalDataTransfer" BIGINT;

-- AlterTable
ALTER TABLE "App" ADD COLUMN     "category" TEXT,
ADD COLUMN     "minVersion" TEXT,
ADD COLUMN     "rateLimitPerHour" INTEGER DEFAULT 1000,
ADD COLUMN     "version" TEXT NOT NULL DEFAULT '1.0.0';

-- AlterTable
ALTER TABLE "AppInstall" ADD COLUMN     "config" JSONB;

-- AlterTable
ALTER TABLE "AppInstallScope" ADD COLUMN     "expiresAt" TIMESTAMP(3),
ADD COLUMN     "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "AppScope" ADD COLUMN     "category" TEXT;

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "partySize" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "BookingAction" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "loyaltyPoints" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "preferredLanguage" TEXT,
ADD COLUMN     "preferredTimezone" TEXT,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "totalBookings" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalSpent" DECIMAL(10,2) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Discount" ADD COLUMN     "firstTimeCustomerOnly" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "minimumSpend" DECIMAL(10,2),
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "InvoiceItem" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "unitPrice" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "Merchant" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'USD',
ADD COLUMN     "dateFormat" TEXT NOT NULL DEFAULT 'DD/MM/YYYY',
ADD COLUMN     "locale" TEXT NOT NULL DEFAULT 'en-US',
ADD COLUMN     "timeFormat" TEXT NOT NULL DEFAULT '24h',
ADD COLUMN     "timezone" TEXT NOT NULL DEFAULT 'UTC';

-- AlterTable
ALTER TABLE "NotificationLog" ADD COLUMN     "deliveredAt" TIMESTAMP(3),
ADD COLUMN     "openedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "NotificationTemplate" ADD COLUMN     "variables" JSONB;

-- AlterTable
ALTER TABLE "OAuthToken" ADD COLUMN     "isRevoked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "revokedAt" TIMESTAMP(3),
ADD COLUMN     "tokenType" TEXT NOT NULL DEFAULT 'Bearer';

-- AlterTable
ALTER TABLE "Rate" ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "RateAddOn" ADD COLUMN     "isRequired" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "RefundLog" ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "RefundRequest" ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "isVirtual" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "location" JSONB,
ADD COLUMN     "serviceArea" JSONB,
ADD COLUMN     "serviceLocationId" TEXT;

-- AlterTable
ALTER TABLE "ResourceBookingConfig" ADD COLUMN     "autoConfirm" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "WaitlistEntry" ADD COLUMN     "partySize" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "WaitlistEntryTransition" DROP COLUMN "fromStatus",
ADD COLUMN     "fromStatus" "WaitlistStatus" NOT NULL,
DROP COLUMN "toStatus",
ADD COLUMN     "toStatus" "WaitlistStatus" NOT NULL;

-- AlterTable
ALTER TABLE "WebhookEvent" ADD COLUMN     "maxRetries" INTEGER NOT NULL DEFAULT 3;

-- AlterTable
ALTER TABLE "WebhookEventLog" ADD COLUMN     "responseTime" INTEGER;

-- CreateTable
CREATE TABLE "Currency" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "exchangeRate" DECIMAL(10,6) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceLocation" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postcode" TEXT,
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "timezone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailabilityBlock" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "blockType" "BlockType" NOT NULL,
    "reason" TEXT,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "recurrenceRule" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvailabilityBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailabilityRule" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "validFrom" TIMESTAMP(3),
    "validTo" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvailabilityRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingConstraint" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "constraintType" "ConstraintType" NOT NULL,
    "value" JSONB NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingConstraint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapacitySlot" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "totalCapacity" INTEGER NOT NULL,
    "bookedCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CapacitySlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingRule" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ruleType" "PricingRuleType" NOT NULL,
    "conditions" JSONB NOT NULL,
    "adjustment" JSONB NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "validFrom" TIMESTAMP(3),
    "validTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerPreference" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "title" TEXT,
    "comment" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "merchantResponse" TEXT,
    "respondedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventSubscription" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "events" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastPingAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemEvent" (
    "id" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SystemEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Integration" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "integrationType" "IntegrationType" NOT NULL,
    "config" JSONB NOT NULL,
    "credentials" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastSyncAt" TIMESTAMP(3),
    "lastSyncStatus" TEXT,
    "syncErrors" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportJob" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "jobType" "ImportJobType" NOT NULL,
    "fileName" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "totalRows" INTEGER,
    "processedRows" INTEGER NOT NULL DEFAULT 0,
    "errorRows" INTEGER NOT NULL DEFAULT 0,
    "errors" JSONB,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImportJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedSearch" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "searchType" TEXT NOT NULL,
    "query" JSONB NOT NULL,
    "isShared" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedSearch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportTemplate" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "reportType" TEXT NOT NULL,
    "config" JSONB NOT NULL,
    "schedule" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReportTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportExecution" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reportUrl" TEXT,
    "parameters" JSONB,
    "errorLog" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReportExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityLog" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT,
    "eventType" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataRetentionPolicy" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "retentionPeriod" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastRunAt" TIMESTAMP(3),
    "nextRunAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataRetentionPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Currency_code_key" ON "Currency"("code");

-- CreateIndex
CREATE INDEX "Currency_code_idx" ON "Currency"("code");

-- CreateIndex
CREATE INDEX "Currency_isActive_idx" ON "Currency"("isActive");

-- CreateIndex
CREATE INDEX "ServiceLocation_merchantId_idx" ON "ServiceLocation"("merchantId");

-- CreateIndex
CREATE INDEX "ServiceLocation_city_country_idx" ON "ServiceLocation"("city", "country");

-- CreateIndex
CREATE INDEX "ServiceLocation_latitude_longitude_idx" ON "ServiceLocation"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "AvailabilityBlock_resourceId_startTime_endTime_idx" ON "AvailabilityBlock"("resourceId", "startTime", "endTime");

-- CreateIndex
CREATE INDEX "AvailabilityBlock_blockType_idx" ON "AvailabilityBlock"("blockType");

-- CreateIndex
CREATE INDEX "AvailabilityBlock_isRecurring_idx" ON "AvailabilityBlock"("isRecurring");

-- CreateIndex
CREATE INDEX "AvailabilityRule_resourceId_dayOfWeek_idx" ON "AvailabilityRule"("resourceId", "dayOfWeek");

-- CreateIndex
CREATE INDEX "AvailabilityRule_validFrom_validTo_idx" ON "AvailabilityRule"("validFrom", "validTo");

-- CreateIndex
CREATE INDEX "BookingConstraint_resourceId_constraintType_idx" ON "BookingConstraint"("resourceId", "constraintType");

-- CreateIndex
CREATE INDEX "BookingConstraint_isActive_idx" ON "BookingConstraint"("isActive");

-- CreateIndex
CREATE INDEX "CapacitySlot_resourceId_startTime_endTime_idx" ON "CapacitySlot"("resourceId", "startTime", "endTime");

-- CreateIndex
CREATE INDEX "CapacitySlot_startTime_endTime_idx" ON "CapacitySlot"("startTime", "endTime");

-- CreateIndex
CREATE INDEX "PricingRule_merchantId_ruleType_idx" ON "PricingRule"("merchantId", "ruleType");

-- CreateIndex
CREATE INDEX "PricingRule_isActive_priority_idx" ON "PricingRule"("isActive", "priority");

-- CreateIndex
CREATE INDEX "PricingRule_validFrom_validTo_idx" ON "PricingRule"("validFrom", "validTo");

-- CreateIndex
CREATE INDEX "CustomerPreference_key_idx" ON "CustomerPreference"("key");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPreference_customerId_key_key" ON "CustomerPreference"("customerId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "Review_bookingId_key" ON "Review"("bookingId");

-- CreateIndex
CREATE INDEX "Review_customerId_idx" ON "Review"("customerId");

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE INDEX "Review_isPublic_idx" ON "Review"("isPublic");

-- CreateIndex
CREATE INDEX "Review_createdAt_idx" ON "Review"("createdAt");

-- CreateIndex
CREATE INDEX "EventSubscription_merchantId_isActive_idx" ON "EventSubscription"("merchantId", "isActive");

-- CreateIndex
CREATE INDEX "SystemEvent_eventType_processed_idx" ON "SystemEvent"("eventType", "processed");

-- CreateIndex
CREATE INDEX "SystemEvent_entityId_entityType_idx" ON "SystemEvent"("entityId", "entityType");

-- CreateIndex
CREATE INDEX "SystemEvent_createdAt_idx" ON "SystemEvent"("createdAt");

-- CreateIndex
CREATE INDEX "Integration_merchantId_integrationType_idx" ON "Integration"("merchantId", "integrationType");

-- CreateIndex
CREATE INDEX "Integration_isActive_idx" ON "Integration"("isActive");

-- CreateIndex
CREATE INDEX "Integration_lastSyncAt_idx" ON "Integration"("lastSyncAt");

-- CreateIndex
CREATE INDEX "ImportJob_merchantId_jobType_idx" ON "ImportJob"("merchantId", "jobType");

-- CreateIndex
CREATE INDEX "ImportJob_status_idx" ON "ImportJob"("status");

-- CreateIndex
CREATE INDEX "ImportJob_createdAt_idx" ON "ImportJob"("createdAt");

-- CreateIndex
CREATE INDEX "SavedSearch_merchantId_searchType_idx" ON "SavedSearch"("merchantId", "searchType");

-- CreateIndex
CREATE INDEX "SavedSearch_createdBy_idx" ON "SavedSearch"("createdBy");

-- CreateIndex
CREATE INDEX "ReportTemplate_merchantId_reportType_idx" ON "ReportTemplate"("merchantId", "reportType");

-- CreateIndex
CREATE INDEX "ReportExecution_templateId_status_idx" ON "ReportExecution"("templateId", "status");

-- CreateIndex
CREATE INDEX "ReportExecution_createdAt_idx" ON "ReportExecution"("createdAt");

-- CreateIndex
CREATE INDEX "SecurityLog_merchantId_eventType_idx" ON "SecurityLog"("merchantId", "eventType");

-- CreateIndex
CREATE INDEX "SecurityLog_severity_idx" ON "SecurityLog"("severity");

-- CreateIndex
CREATE INDEX "SecurityLog_createdAt_idx" ON "SecurityLog"("createdAt");

-- CreateIndex
CREATE INDEX "DataRetentionPolicy_merchantId_dataType_idx" ON "DataRetentionPolicy"("merchantId", "dataType");

-- CreateIndex
CREATE INDEX "DataRetentionPolicy_nextRunAt_isActive_idx" ON "DataRetentionPolicy"("nextRunAt", "isActive");

-- CreateIndex
CREATE INDEX "AddOn_hasInventory_idx" ON "AddOn"("hasInventory");

-- CreateIndex
CREATE INDEX "ApiUsageLog_statusCode_idx" ON "ApiUsageLog"("statusCode");

-- CreateIndex
CREATE INDEX "App_category_idx" ON "App"("category");

-- CreateIndex
CREATE INDEX "AppScope_category_idx" ON "AppScope"("category");

-- CreateIndex
CREATE INDEX "Booking_partySize_idx" ON "Booking"("partySize");

-- CreateIndex
CREATE INDEX "BookingAction_bookingTemplateId_order_idx" ON "BookingAction"("bookingTemplateId", "order");

-- CreateIndex
CREATE INDEX "BookingItem_currentStatus_idx" ON "BookingItem"("currentStatus");

-- CreateIndex
CREATE INDEX "BookingRequest_expiresAt_idx" ON "BookingRequest"("expiresAt");

-- CreateIndex
CREATE INDEX "BookingRequestFlow_expiresAt_idx" ON "BookingRequestFlow"("expiresAt");

-- CreateIndex
CREATE INDEX "Customer_tags_idx" ON "Customer"("tags");

-- CreateIndex
CREATE INDEX "Customer_totalBookings_idx" ON "Customer"("totalBookings");

-- CreateIndex
CREATE INDEX "Discount_firstTimeCustomerOnly_idx" ON "Discount"("firstTimeCustomerOnly");

-- CreateIndex
CREATE INDEX "Invoice_issueDate_idx" ON "Invoice"("issueDate");

-- CreateIndex
CREATE INDEX "Merchant_timezone_idx" ON "Merchant"("timezone");

-- CreateIndex
CREATE INDEX "Merchant_currency_idx" ON "Merchant"("currency");

-- CreateIndex
CREATE INDEX "NotificationLog_status_idx" ON "NotificationLog"("status");

-- CreateIndex
CREATE INDEX "OAuthToken_isRevoked_idx" ON "OAuthToken"("isRevoked");

-- CreateIndex
CREATE INDEX "Rate_currency_idx" ON "Rate"("currency");

-- CreateIndex
CREATE INDEX "RefundRequest_requestedAt_idx" ON "RefundRequest"("requestedAt");

-- CreateIndex
CREATE INDEX "Resource_serviceLocationId_idx" ON "Resource"("serviceLocationId");

-- CreateIndex
CREATE INDEX "Resource_isVirtual_idx" ON "Resource"("isVirtual");

-- CreateIndex
CREATE INDEX "WaitlistEntry_desiredStartTime_desiredEndTime_idx" ON "WaitlistEntry"("desiredStartTime", "desiredEndTime");

-- CreateIndex
CREATE INDEX "WebhookEvent_eventType_idx" ON "WebhookEvent"("eventType");

-- CreateIndex
CREATE INDEX "WebhookEventLog_responseCode_idx" ON "WebhookEventLog"("responseCode");

-- AddForeignKey
ALTER TABLE "ServiceLocation" ADD CONSTRAINT "ServiceLocation_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_serviceLocationId_fkey" FOREIGN KEY ("serviceLocationId") REFERENCES "ServiceLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailabilityBlock" ADD CONSTRAINT "AvailabilityBlock_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailabilityRule" ADD CONSTRAINT "AvailabilityRule_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingConstraint" ADD CONSTRAINT "BookingConstraint_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CapacitySlot" ADD CONSTRAINT "CapacitySlot_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingRule" ADD CONSTRAINT "PricingRule_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerPreference" ADD CONSTRAINT "CustomerPreference_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSubscription" ADD CONSTRAINT "EventSubscription_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportJob" ADD CONSTRAINT "ImportJob_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedSearch" ADD CONSTRAINT "SavedSearch_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportTemplate" ADD CONSTRAINT "ReportTemplate_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportExecution" ADD CONSTRAINT "ReportExecution_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "ReportTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityLog" ADD CONSTRAINT "SecurityLog_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataRetentionPolicy" ADD CONSTRAINT "DataRetentionPolicy_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
