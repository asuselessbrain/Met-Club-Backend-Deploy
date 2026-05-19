import express from "express";
import auth from "../../middlewares/auth";
import { Role } from "../../../../generated/prisma/enums";
import { ContentController } from "./content.controller";
// @ts-ignore: multer may not have types installed in this environment
import multer from "multer";
import path from "path";

const router = express.Router();

const uploadDir = path.join(process.cwd(), "uploads");
const storage = multer.diskStorage({
	destination: (req: any, file: any, cb: any) => cb(null, uploadDir),
	filename: (req: any, file: any, cb: any) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// multipart: fields -> 'sections' (JSON), files -> 'images' (array)
router.get("/", ContentController.getAllContents);
router.post("/", auth(Role.admin), upload.array("images"), ContentController.createOrUpdateContent);
router.patch("/:subchapterId", upload.array("images"), ContentController.createOrUpdateContent);
router.delete("/:subchapterId", ContentController.deleteContentBySubchapter);
router.get("/subchapter/:subchapterId", ContentController.getContentBySubchapter);

export const ContentRoutes = router;
