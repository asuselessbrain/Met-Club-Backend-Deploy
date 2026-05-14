-- CreateTable
CREATE TABLE "LearningContent" (
    "id" SERIAL NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "subchapterId" INTEGER NOT NULL,
    "sections" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LearningContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LearningContent_subchapterId_key" ON "LearningContent"("subchapterId");
