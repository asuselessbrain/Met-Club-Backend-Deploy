import { Request, Response } from "express"
import { catchAsync } from "../../../utils/catchAsync"
import sendResponse from "../../../utils/responser"
import { UserService } from "./user.service"

const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body)
    
    sendResponse(res, {
        statusCode: 201,
        message: "User created successfully!",
        data: result
    })
})

export const userController = {
    createUser,
}