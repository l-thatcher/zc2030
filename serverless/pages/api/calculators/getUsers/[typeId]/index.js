import {getUsersThatCanViewCalculator} from "../../../../../services/PrismaService";

export default async function handler(req, res) {
    const { typeId } = req.query;
    switch (req.method) {
        // Get data from database
        case "GET":
            try {
                const result = await getUsersThatCanViewCalculator(BigInt(typeId))
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
            break;

        // Delete data from database
        case "DELETE":
            break;

        // Update data from database
        case "PUT":
            break;
    }
}
