import { execute_query } from "../../../utils/db";

const getAdminData = `SELECT * FROM USER WHERE type='ADMIN'`;
const addNewAdmin = `UPDATE USER 
SET 
    type = 'ADMIN'
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
d
    // Create data from database
    case "POST":
      break;

    // Delete data from database
    case "DELETE":
      break;

    // Update data from database
    case "PUT":
      const email = req.query.email;
      try {
        const result = await execute_query(addNewAdmin, [email]);
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;
  }
}
