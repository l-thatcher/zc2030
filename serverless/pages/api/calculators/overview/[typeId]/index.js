import {
    getCountOfUsersUniqueFilledResultsByCategory,
    getDetailsByType,
    getInputsByCategory, getUsersThatCanViewCalculator
} from "../../../../../services/PrismaService";
import {execute_query} from "../../../../../utils/db";

const saveCalculatorType = ` INSERT INTO CalculatorType(name, public)
                             VALUES (?, ?)`;

const updateCalculatorType = ` UPDATE CalculatorType
                               SET name = ?, public = ?
                               WHERE id = ?`;

export default async function handler(req, res) {
    switch (req.method) {
        // Get data from database

        case "GET":
            try {
                const typeId = BigInt(req.query.typeId);
                const result = await getDetailsByType(typeId)
                // Serialization that avoids issue with BigInt
                const json = JSON.stringify(result, (key, value) =>
                    typeof value === "bigint" ? parseInt(value) : value
                );
                res.status(200).json(json);
            } catch (e) {
                res.status(500).json({ message: e.message });
            }
            break;

        // Create data from database
        case "POST":

            const namePost = req.body[0];
            const publicPost = req.body[1];

            try {
                const result = await execute_query(
                    saveCalculatorType,
                    namePost,
                    publicPost
                );
                res.status(200).json(result);
            } catch (e) {
                res.status(500).json({ message: e.message });
            }

            break;

        // Delete data from database
        case "DELETE":
            break;

        // Update data from database
        case "PUT":

            const typeId = req.query.typeId;
            const namePut = req.body[0];
            const publicPut = req.body[1];
            try {
                const result = await execute_query(
                    updateCalculatorType,
                    namePut,
                    publicPut,
                    typeId
                );
                res.status(200).json(result);
            } catch (e) {
                res.status(500).json({ message: e.message });
            }

            break;
    }
}
