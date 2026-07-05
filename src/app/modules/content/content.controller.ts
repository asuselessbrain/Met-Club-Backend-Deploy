import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/responser";
import { ContentService } from "./content.service";

// Minimal Multer file type to avoid depending on @types/multer in this environment
type MulterFile = {
  fieldname?: string;
  originalname?: string;
  encoding?: string;
  mimetype?: string;
  destination?: string;
  filename: string;
  path?: string;
  size?: number;
  buffer?: Buffer;
};

type MulReq = Request & { files?: MulterFile[] };

const createOrUpdateContent = catchAsync(async (req: MulReq, res: Response) => {
  // expected fields: chapterId, sections (JSON string)
  const { chapterId, sections } = req.body as {
    chapterId: string;
    sections: string;
  };

  let parsedSections: Array<{ content: string; imageIndex: number | null; image?: string | null }> = [];
  try {
    parsedSections = JSON.parse(sections || "[]");
  } catch (err) {
    parsedSections = [];
  }

  const files = req.files || [];

  const mappedSections = parsedSections.map((s, idx) => {
    const imgIdx = typeof s.imageIndex === "number" ? s.imageIndex : null;
    const file = imgIdx !== null ? files[imgIdx] : undefined;
    const imagePath = file ? `/uploads/${file.filename}` : s.image || null;
    return {
      content: s.content || "",
      image: imagePath,
    };
  });

  const payload = {
    chapterId: Number(chapterId),
    sections: mappedSections,
  };

  const result = await ContentService.createOrUpdateContent(payload);

  sendResponse(res, {
    statusCode: 201,
    message: "Content saved successfully!",
    data: result,
  });
});

const getAllContents = catchAsync(async (_req: Request, res: Response) => {
  const result = await ContentService.getAllContents();

  sendResponse(res, {
    statusCode: 200,
    message: "Contents retrieved successfully!",
    data: result,
  });
});

const getContentByChapter = catchAsync(async (req: Request, res: Response) => {
  const chapterId = Number(req.params.chapterId);
  const result = await ContentService.getContentByChapter(chapterId);

  sendResponse(res, {
    statusCode: 200,
    message: "Content retrieved successfully!",
    data: result,
  });
});

const deleteContentByChapter = catchAsync(async (req: Request, res: Response) => {
  const chapterId = Number(req.params.chapterId);
  const result = await ContentService.deleteContentByChapter(chapterId);

  sendResponse(res, {
    statusCode: 200,
    message: "Content deleted successfully!",
    data: result,
  });
});

export const ContentController = {
  createOrUpdateContent,
  getAllContents,
  getContentByChapter,
  deleteContentByChapter,
};
