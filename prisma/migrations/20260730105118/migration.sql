/*
  Warnings:

  - You are about to drop the column `subchapterId` on the `LearningContent` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chapterId]` on the table `LearningContent` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX IF EXISTS "LearningContent_subchapterId_key";

-- AlterTable
ALTER TABLE "LearningContent" DROP COLUMN IF EXISTS "subchapterId";

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "locationKey" TEXT NOT NULL,
    "nameBn" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "addressBn" TEXT NOT NULL,
    "addressEn" TEXT NOT NULL,
    "descBn" TEXT NOT NULL,
    "descEn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubMember" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "nameBn" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "classBn" TEXT NOT NULL,
    "classEn" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClubMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LearningContent_chapterId_key" ON "LearningContent"("chapterId");

-- AddForeignKey
ALTER TABLE "ClubMember" ADD CONSTRAINT "ClubMember_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
