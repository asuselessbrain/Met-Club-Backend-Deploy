import { Request, Response } from "express"
import { catchAsync } from "../../../utils/catchAsync"
import sendResponse from "../../../utils/responser"
import { UserService } from "./user.service"

const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body)

    res.cookie('token', result.accessToken, { secure: false, httpOnly: true })

    sendResponse(res, {
        statusCode: 201,
        message: "User created successfully!",
        data: result
    })
})

const isChapterCompleted = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    console.log(req.user)
    const { email } = req.user;
    const chapterId = Number(req.params.chapterId)

    const result = await UserService.isChapterCompleted({ email, chapterId })
    sendResponse(res, {
        statusCode: 200,
        message: "Chapter completion status retrieved successfully!",
        data: result
    })
})

const isChapterOneCompleted = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    console.log(req.user)
    const { email } = req.user;

    const result = await UserService.isChapterOneCompleted({ email })
    sendResponse(res, {
        statusCode: 200,
        message: "Chapter one completion status retrieved successfully!",
        data: result
    })
})

const updateChapterCompletion = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    const { email } = req.user;
    const chapterId = Number(req.params.chapterId)
    const result = await UserService.updateChapterCompletion({ email, chapterId })
    sendResponse(res, {
        statusCode: 200,
        message: "Chapter completion status updated successfully!",
        data: result
    })
})

const quizLevelInfo = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    const { email } = req.user;
    const chapterId = Number(req.params.chapterId)
    const result = await UserService.quizLevelInfo({ email, chapterId })
    sendResponse(res, {
        statusCode: 200,
        message: "Quiz level info retrieved successfully!",
        data: result
    })
})

const updateQuizLevel = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    const { email } = req.user;
    const chapterId = Number(req.params.chapterId)
    const { level } = req.body;
    const result = await UserService.quizLevelUpdate({ email, chapterId, quizLevel: level })
    sendResponse(res, {
        statusCode: 200,
        message: "Quiz level updated successfully!",
        data: result
    })
})

export const userController = {
    createUser,
    isChapterCompleted,
    isChapterOneCompleted,
    updateChapterCompletion,
    quizLevelInfo,
    updateQuizLevel
}