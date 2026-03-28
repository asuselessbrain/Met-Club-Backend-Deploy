/*
  Warnings:

  - The primary key for the `IsChapterComplete` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `IsChapterComplete` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IsChapterComplete" DROP CONSTRAINT "IsChapterComplete_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "IsChapterComplete_pkey" PRIMARY KEY ("userId", "chapterId");
