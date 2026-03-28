import { Role, QuizLevel } from "../../../../generated/prisma/client"
import bcrypt from "bcrypt";
import { config } from "../../../config";
import { prisma } from "../../../lib/prisma";
import { IUser } from "../../../types";
import AppError from "../../errors/appErrors";
import { jwtGenerator } from "../../../utils/jwt";
import { Secret } from "jsonwebtoken";
import { StringValue } from "ms";

const generateStudentId = async () => {
    const lastUser = await prisma.user.findFirst({
        orderBy: {
            createdAt: "desc",
        },
        select: {
            studentId: true,
        },
    });

    let nextNumber = 1;

    if (lastUser?.studentId) {
        const lastNumber = parseInt(lastUser.studentId.split("-").pop() || "0");
        nextNumber = lastNumber + 1;
    }

    return `Met-Club-${nextNumber}`;
};

const createUser = async (payload: IUser) => {
    const hashedPassword = await bcrypt.hash(payload.password, Number(config.salt_rounds))

    const userData = {
        ...payload,
        studentId: await generateStudentId(),
        password: hashedPassword,
        role: Role.student
    }

    const result = await prisma.$transaction(async (transaction) => {
        const createUser = await transaction.user.create({
            data: userData
        })

        const chapters = [1, 14, 15, 3];

        const chapterData = chapters.map((chapterId) => ({
            userId: createUser.id,
            quizLevel: null,
            chapterId,
        }));

        await transaction.isChapterComplete.createMany({
            data: chapterData
        })
        return createUser;
    })

    const accessToken = await jwtGenerator({
        userInfo: { email: result.email, role: result.role },
        createSecretKey: config.jwt.token_secret as Secret,
        expiresIn: config.jwt.token_expires_in as StringValue,
    })
    return { ...result, accessToken };
}

const isChapterCompleted = async (payload: { email: string, chapterId: number }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true
        }
    })
    if (!user) {
        throw new AppError(404, "User not found!")
    }

    const chapterCompletion = await prisma.isChapterComplete.findFirst({
        where: {
            userId: user.id,
            chapterId: payload.chapterId
        }
    })

    console.log(chapterCompletion)

    return chapterCompletion?.isComplete || false;

}

const isChapterOneCompleted = async (payload: { email: string }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true
        }
    })
    if (!user) {
        throw new AppError(404, "User not found!")
    }
    const chapterCompletion = await prisma.isChapterComplete.findFirst({
        where: {
            userId: user.id,
            chapterId: 1
        }
    })

    return chapterCompletion?.isComplete || false;
}

const updateChapterCompletion = async (payload: { email: string, chapterId: number }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true
        }
    })
    if (!user) {
        throw new AppError(404, "User not found!")
    }

    const updatedCompletion = await prisma.isChapterComplete.updateMany({
        where: {
            userId: user.id,
            chapterId: payload.chapterId
        },
        data: {
            isComplete: true
        }
    })
    return updatedCompletion;
}

const quizLevelInfo = async (payload: { email: string, chapterId: number }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true
        }
    })
    if (!user) {
        throw new AppError(404, "User not found!")
    }

    const chapterCompletion = await prisma.isChapterComplete.findFirst({
        where: {
            userId: user.id,
            chapterId: payload.chapterId
        },
        select: {
            quizLevel: true
        }
    })

    return chapterCompletion?.quizLevel || null;
}

const quizLevelUpdate = async (payload: { email: string, chapterId: number, quizLevel: QuizLevel }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true
        }
    })
    if (!user) {
        throw new AppError(404, "User not found!")
    }

    const updatedQuizLevel = await prisma.isChapterComplete.updateMany({
        where: {
            userId: user.id,
            chapterId: payload.chapterId
        },
        data: {
            quizLevel: payload.quizLevel
        }
    })
    return updatedQuizLevel;
}

export const UserService = {
    createUser,
    isChapterCompleted,
    isChapterOneCompleted,
    updateChapterCompletion,
    quizLevelInfo,
    quizLevelUpdate
}