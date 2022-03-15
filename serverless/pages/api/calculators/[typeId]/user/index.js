import {createUserCalculatorEntity, deleteUserCalculator, getUsersByEmail} from "../../../../../services/PrismaService";
import {execute_query} from "../../../../../utils/db";

export default async function handler(req, res) {


    switch (req.method) {

        // Get data from database
        case "GET":
            break;

        // Create data from database
        case "POST":
            const typeId = req.query.typeId;
            const userEmail = req.body;
            try {
                const user = await getUsersByEmail(userEmail);
                console.log("!!!!!!!!!!!")
                console.log(user)
                const userCalculator = await createUserCalculatorEntity(BigInt(typeId), user[0].id)
                const json = JSON.stringify(userCalculator, (key, value) =>
                    typeof value === "bigint" ? parseInt(value) : value
                );
                res.status(200).json(json);
            } catch (e) {
                console.log(e)
                res.status(500).json({ message: e.message });
            }
            break;

        // Delete data from database
        case "DELETE":
            break;

        // Update data from database
        case "PUT":
            break;
    }
}
