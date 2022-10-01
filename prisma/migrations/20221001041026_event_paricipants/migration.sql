/*
  Warnings:

  - You are about to drop the column `eventId` on the `persons` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "persons" DROP CONSTRAINT "persons_eventId_fkey";

-- AlterTable
ALTER TABLE "persons" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "event_participants" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_participants_pkey" PRIMARY KEY ("id")
);
