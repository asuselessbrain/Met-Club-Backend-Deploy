/*
  Warnings:

  - Changed the type of `chapterId` on the `IsChapterComplete` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "IsChapterComplete" DROP COLUMN "chapterId",
ADD COLUMN     "chapterId" INTEGER NOT NULL;
