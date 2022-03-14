import {PrismaClient, Prisma} from "@prisma/client";
import MainService from "./MainService";

const prisma = new PrismaClient();

// export default async function FilledResultsByCategory(userId, inputIds) {
//     const results = await prisma.calculatorResult.findMany({
//         where: {
//             user_id: userId,
//             input_id: {in: inputIds}
//         },
//     })
// }

export const getInputsByCategory = (categoryId) => {
    return prisma.calculatorInput.findMany({
        where: {
            category_id: categoryId,
        },
        select: {
            id: true,
        },
    });
};

export const getUsersThatCanViewCalculator = (typeId) => {
    return prisma.userCalculator.findMany({
        where: {
            type_id: typeId,
        }
    });
};

export const getCountOfUsersUniqueFilledResultsByCategory = (
    userId,
    idArray
) => {
    return prisma.calculatorResult.findMany({
        distinct: ["input_id"],
        where: {
            user_id: userId,
            input_id: {in: idArray},
        },
    });
};

export const getDetailsByType = (typeId) => {
    return prisma.calculatorType.findUnique({
        where: {
            id: typeId
        }
    })
}

export const getUsersFromList = (userIdList) => {
    return prisma.user.findMany({
        where: {
            id: {in: userIdList}
        },
        select: {
            email: true,
            id: true
        }
    })
}

export const deleteCalculatorType = (typeId) => {
    return prisma.calculatorType.delete({
        where: {
            id: typeId
        }
    })
}

export const deleteCategoryByType = (typeId) => {
    return prisma.calculatorCategory.deleteMany({
        where: {
            type_id: typeId
        }
    })
}

export const deleteCategoryByCategoryId = (categoryId) => {
    return prisma.calculatorCategory.delete({
        where: {
            id: categoryId
        }
    })
}

export const deleteInputByCategory = (categoryId) => {
    return prisma.calculatorInput.deleteMany({
        where: {
            category_id: categoryId
        }
    })
}

export const deleteInputByInputId = (inputId) => {
    return prisma.calculatorInput.deleteMany({
        where: {
            id: inputId
        }
    })
}


export const deleteResultByInput = (inputId) => {
    return prisma.calculatorResult.deleteMany({
        where: {
            input_id: inputId
        }
    })
}

export const deleteUserCalculator = (typeId, userId) => {
    return prisma.userCalculator.deleteMany({
        where: {
            type_id: typeId,
            user_id: userId
        }
    })
}

export const getUsersLogs = (userId) => {
    return prisma.calculatorResult.findMany({
        where: {
            user_id: userId
        },
        include: {
            calculatorinput: {
                include: {
                    calculatorcategory: true
                }
            }
        }
    })
}

export const createCalculator = (calculatorName, isPublic) => {
    return prisma.calculatorType.create({
        data: {
            name: calculatorName,
            public: isPublic
        }
    })
}

