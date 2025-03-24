-- CreateEnum
CREATE TYPE "AppInstallStatus" AS ENUM ('PENDING', 'ACTIVE', 'SUSPENDED', 'UNINSTALLED');

-- CreateTable
CREATE TABLE "App" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoUrl" TEXT,
    "websiteUrl" TEXT,
    "merchantId" TEXT NOT NULL,
    "clientId" TEXT,
    "clientSecret" TEXT,
    "redirectUrls" JSONB,
    "webhookUrl" TEXT,
    "scopes" JSONB,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppInstall" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "appId" TEXT NOT NULL,
    "status" "AppInstallStatus" NOT NULL DEFAULT 'PENDING',
    "installedAt" TIMESTAMP(3),
    "uninstalledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppInstall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppScope" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppScope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppInstallScope" (
    "id" TEXT NOT NULL,
    "appInstallId" TEXT NOT NULL,
    "scopeId" TEXT NOT NULL,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppInstallScope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OAuthToken" (
    "id" TEXT NOT NULL,
    "appId" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "expiresAt" TIMESTAMP(3),
    "scopes" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OAuthToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppInstall" ADD CONSTRAINT "AppInstall_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppInstall" ADD CONSTRAINT "AppInstall_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppInstallScope" ADD CONSTRAINT "AppInstallScope_appInstallId_fkey" FOREIGN KEY ("appInstallId") REFERENCES "AppInstall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppInstallScope" ADD CONSTRAINT "AppInstallScope_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "AppScope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthToken" ADD CONSTRAINT "OAuthToken_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthToken" ADD CONSTRAINT "OAuthToken_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
