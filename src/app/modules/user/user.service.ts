import { Role } from "../../../../generated/prisma/client"
import bcrypt from "bcrypt";
import { config } from "../../../config";
import { prisma } from "../../../lib/prisma";
import { IUser } from "../../../types";
import AppError from "../../errors/appErrors";

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
    return result
}

const isChapterCompleted = async(payload: {email: string, chapterId: number}) => {
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

    return !!chapterCompletion;

}

export const UserService = {
    createUser,
}