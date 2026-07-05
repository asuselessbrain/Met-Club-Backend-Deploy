import AppError from "../../errors/appErrors";
import { prisma } from "../../../lib/prisma";

type SectionPayload = {
  image: string | null;
  content: string;
};

type CreateContentPayload = {
  chapterId: number;
  sections: SectionPayload[];
};

const createOrUpdateContent = async (payload: CreateContentPayload) => {
  if (!payload.chapterId) {
    throw new AppError(400, "Chapter is required");
  }

  if (!Array.isArray(payload.sections) || payload.sections.length === 0) {
    throw new AppError(400, "At least one section is required");
  }

  const normalizedSections = payload.sections.map((section) => ({
    image: section.image ?? null,
    content: section.content ?? "",
  }));

  const result = await prisma.learningContent.upsert({
    where: {
      chapterId: payload.chapterId,
    },
    create: {
      chapterId: payload.chapterId,
      sections: normalizedSections,
    },
    update: {
      sections: normalizedSections,
    },
  });

  return result;
};

const getContentByChapter = async (chapterId: number) => {
  if (!chapterId) {
    throw new AppError(400, "Chapter id is required");
  }

  const result = await prisma.learningContent.findUnique({
    where: {
      chapterId,
    },
  });

  return result;
};

const getAllContents = async () => {
  const result = await prisma.learningContent.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return result;
};

const deleteContentByChapter = async (chapterId: number) => {
  if (!chapterId) {
    throw new AppError(400, "Chapter id is required");
  }

  const result = await prisma.learningContent.deleteMany({
    where: {
      chapterId,
    },
  });

  if (result.count === 0) {
    throw new AppError(404, "Content not found");
  }

  return result;
};

export const ContentService = {
  createOrUpdateContent,
  getContentByChapter,
  getAllContents,
  deleteContentByChapter,
};
