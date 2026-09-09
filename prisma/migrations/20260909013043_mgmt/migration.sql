/*
  Warnings:

  - You are about to drop the `MaintenanceCompany` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MaintenanceCompany";

-- CreateTable
CREATE TABLE "Management" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Management_pkey" PRIMARY KEY ("id")
);
