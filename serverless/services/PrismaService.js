import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

// export default async function FilledResultsByCategory(userId, inputIds) {
//     const results = await prisma.calculatorResult.findMany({
//         where: {
//             user_id: userId,
//             input_id: {in: inputIds}
//         },
//     })
// }

export default async function getCountOfUniqueFilledResultsByCategory(userId, inputIds) {
    return await prisma.calculatorResult.findMany({
        distinct: ["input_id"],
        where: {
            user_id: userId,
            input_id: {in: inputIds}
        },
    }).count()
}