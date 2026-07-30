import { Request, Response } from "express";
import { SchoolService } from "./school.service";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/responser";

const createSchool = catchAsync(async (req: Request, res: Response) => {
  const result = await SchoolService.createSchool(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "School created successfully",
    data: result,
  });
});

const getSchoolsByLocation = catchAsync(async (req: Request, res: Response) => {
  const locationKey = req.query.location as string;
  const result = await SchoolService.getSchoolsByLocation(locationKey);
  sendResponse(res, {
    statusCode: 200,
    message: "Schools retrieved successfully",
    data: result,
  });
});

const getSchoolById = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SchoolService.getSchoolById(id);
  sendResponse(res, {
    statusCode: 200,
    message: "School retrieved successfully",
    data: result,
  });
});

const updateSchool = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SchoolService.updateSchool(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "School updated successfully",
    data: result,
  });
});

const deleteSchool = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SchoolService.deleteSchool(id);
  sendResponse(res, {
    statusCode: 200,
    message: "School deleted successfully",
    data: result,
  });
});

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await SchoolService.createMember(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "Member created successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SchoolService.updateMember(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SchoolService.deleteMember(id);
  sendResponse(res, {
    statusCode: 200,
    message: "Member deleted successfully",
    data: result,
  });
});

export const SchoolController = {
  createSchool,
  getSchoolsByLocation,
  getSchoolById,
  updateSchool,
  deleteSchool,
  createMember,
  updateMember,
  deleteMember,
};
