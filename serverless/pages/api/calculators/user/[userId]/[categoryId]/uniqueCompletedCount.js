import { PrismaClient } from '@prisma/client'
import {useRouter} from "next/router";
import {
    getCountOfUsersUniqueFilledResultsByCategory,
    getInputsByCategory
} from "../../../../../../services/PrismaService";

const prisma = new PrismaClient()
export default async function handler(req, res) {
    switch (req.method) {
        // Get data from database

        case "GET":
            try {

                const categoryId = parseInt(req.query.categoryId)
                const inputIds = await getInputsByCategory(categoryId)
                const idArray = inputIds.map(input => input.id)
                const result = await getCountOfUsersUniqueFilledResultsByCategory(req.query.userId, idArray)

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