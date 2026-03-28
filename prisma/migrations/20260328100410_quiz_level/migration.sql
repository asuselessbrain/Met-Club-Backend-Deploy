/*
  Warnings:

  - You are about to drop the `QuizLevelModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "IsChapterComplete" ADD COLUMN     "quizLevel" "QuizLevel";

-- DropTable
DROP TABLE "QuizLevelModel";
