import {execute_query} from "../../../../../../utils/db";
import {deleteUserCalculator} from "../../../../../../services/PrismaService";

export default async function handler(req, res) {
    const { typeId } = req.query.typeId;
    const { userId } = req.query.userId;

    switch (req.method) {

        // Get data from database
        case "GET":
            break;

        // Create data from database
        case "POST":
            break;

        // Delete data from database
        case "DELETE":

            try {
                await deleteUserCalculator(BigInt(typeId), BigInt(userId))
                res.status(204).json();
            } catch (e) {
                console.log(e)
                res.status(500).json({ message: e.message });
            }

            break;

        // Update data from database
        case "PUT":

            const typeIdPut = req.body[0];
            const namePut = req.body[1];
            const categoryIdPut = req.body[2];

            try {
                const result = await execute_query(
                    updateCalculatorCategory, [
                        typeIdPut,
                        namePut,
                        categoryIdPut
                    ]);
                res.status(200).json(result);
            } catch (e) {
                res.status(500).json({ message: e.message });
            }

            break;
    }
}
