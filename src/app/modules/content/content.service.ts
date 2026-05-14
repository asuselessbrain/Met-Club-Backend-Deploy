import AppError from "../../errors/appErrors";
import { prisma } from "../../../lib/prisma";

type SectionPayload = {
  image: string | null;
  content: string;
};

type CreateContentPayload = {
  chapterId: number;
  subchapterId: number;
  sections: SectionPayload[];
};

const createOrUpdateContent = async (payload: CreateContentPayload) => {
  if (!payload.chapterId || !payload.subchapterId) {
    throw new AppError(400, "Chapter and subchapter are required");
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
      subchapterId: payload.subchapterId,
    },
    create: {
      chapterId: payload.chapterId,
      subchapterId: payload.subchapterId,
      sections: normalizedSections,
    },
    update: {
      chapterId: payload.chapterId,
      sections: normalizedSections,
    },
  });

  return result;
};

const getContentBySubchapter = async (subchapterId: number) => {
  if (!subchapterId) {
    throw new AppError(400, "Subchapter id is required");
  }

  const result = await prisma.learningContent.findUnique({
    where: {
      subchapterId,
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

const deleteContentBySubchapter = async (subchapterId: number) => {
  if (!subchapterId) {
    throw new AppError(400, "Subchapter id is required");
  }

  const result = await prisma.learningContent.deleteMany({
    where: {
      subchapterId,
    },
  });

  if (result.count === 0) {
    throw new AppError(404, "Content not found");
  }

  return result;
};

export const ContentService = {
  createOrUpdateContent,
  getContentBySubchapter,
  getAllContents,
  deleteContentBySubchapter,
};
