-- CreateEnum
CREATE TYPE "Role" AS ENUM ('student', 'admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('active', 'blocked');

-- CreateEnum
CREATE TYPE "QuizLevel" AS ENUM ('easy', 'medium', 'hard');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "className" INTEGER NOT NULL,
    "guardianPhone" TEXT NOT NULL,
    "district" TEXT,
    "password" TEXT NOT NULL,
    "profileImg" TEXT,
    "role" "Role" NOT NULL DEFAULT 'student',
    "status" "Status" NOT NULL DEFAULT 'active',
    "isChapterFinished" BOOLEAN NOT NULL DEFAULT false,
    "quizCompleted" "QuizLevel",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_studentId_key" ON "User"("studentId");
