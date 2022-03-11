import { PrismaClient, Prisma } from "@prisma/client";
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

export const getCountOfUsersUniqueFilledResultsByCategory = (
  userId,
  idArray
) => {
  return prisma.calculatorResult.findMany({
    distinct: ["input_id"],
    where: {
      user_id: userId,
      input_id: { in: idArray },
    },
  });
};
