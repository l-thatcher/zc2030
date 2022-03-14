import {getUsersLogs} from "../../../../../services/PrismaService";

export default async function handler(req, res) {

    switch (req.method) {
        // Get data from database
        case "GET":
            try {
                const result = await getUsersLogs(req.query.userId)
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
