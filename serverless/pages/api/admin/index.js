import {execute_query} from "../../../utils/db";

const getAdminData = `SELECT * FROM USER WHERE role='ADMIN'`;
const updateRole = `UPDATE USER 
SET 
    role = ?
WHERE
    email = ?`;

export default async function handler(req, res) {
    switch (req.method) {
        // Get data from database
        case "GET":
            try {
                const result = await execute_query(getAdminData);
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
            try {
                const role = req.body[0];
                const email = req.body[1];
                const result = await execute_query(updateRole, [role, email]);
                res.status(200).json(result);
            } catch (e) {
                res.status(500).json({ message: e.message });
            }
            break;
    }
}
