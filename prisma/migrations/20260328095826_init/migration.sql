/*
  Warnings:

  - Changed the type of `chapterId` on the `QuizLevelModel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "QuizLevelModel" DROP COLUMN "chapterId",
ADD COLUMN     "chapterId" INTEGER NOT NULL;
