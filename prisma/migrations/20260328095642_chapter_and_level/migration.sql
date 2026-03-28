-- CreateTable
CREATE TABLE "IsChapterComplete" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "IsChapterComplete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizLevelModel" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "quizLevel" "QuizLevel" NOT NULL,

    CONSTRAINT "QuizLevelModel_pkey" PRIMARY KEY ("id")
);
