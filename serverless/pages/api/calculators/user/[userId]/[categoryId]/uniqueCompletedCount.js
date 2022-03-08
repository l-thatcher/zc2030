import { PrismaClient } from '@prisma/client'
import {useRouter} from "next/router";

const prisma = new PrismaClient()
export default async function handler(req, res) {
    switch (req.method) {
        // Get data from database

        case "GET":
            try {
                const categoryId = parseInt(req.query.categoryId)
                // console.log(categoryId)
                const inputIds = await prisma.calculatorInput.findMany(
                {
                    where: {
                        category_id: categoryId,
                    },
                    select: {
                        id: true
                    }
                })
                const idArray = inputIds.map(input => input.id)

                const result = await prisma.calculatorResult.findMany(
                    {distinct: ["input_id"],
                    where: {
                        user_id: req.query.userId,
                        input_id: {in: idArray}
                    },
                })
                res.status(200).json(result);
            } catch (e) {
                res.status(500).json({ message: e.message });
            }
            break;

        // Create data from database
        case "POST":
            break;

        // Delete data from database
        case "DELETE":
            break;

        // Update data from database
        case "PUT":
            break;
    }
}