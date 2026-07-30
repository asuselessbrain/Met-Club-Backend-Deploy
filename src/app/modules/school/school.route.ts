import express from "express";
import auth from "../../middlewares/auth";
import { Role } from "../../../../generated/prisma/enums";
import { SchoolController } from "./school.controller";

const router = express.Router();

router.get("/", SchoolController.getSchoolsByLocation);
router.get("/:id", SchoolController.getSchoolById);

router.post("/", auth(Role.admin), SchoolController.createSchool);
router.patch("/:id", auth(Role.admin), SchoolController.updateSchool);
router.delete("/:id", auth(Role.admin), SchoolController.deleteSchool);

router.post("/members", auth(Role.admin), SchoolController.createMember);
router.patch("/members/:id", auth(Role.admin), SchoolController.updateMember);
router.delete("/members/:id", auth(Role.admin), SchoolController.deleteMember);

export const SchoolRoutes = router;
