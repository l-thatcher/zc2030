import { getListofProjects } from "../../../services/PrismaService";
import { createNewProject } from "../../../services/PrismaService";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  switch (req.method) {
    // Get data from database
    case "GET":
      try {
        const result = await getListofProjects(req.body);
        res.status(200).json(result);
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
      }

      break;

    // Create data from database
    case "POST":
      try {
        const result = await createNewProject(req.body);
        res.status(200).json(result);
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
      }

      break;

    // Delete data from database
    case "DELETE":
      break;

    // Update data from database
    case "PUT":
      try {
        const result = await editProjectById(req.body, id);
        res.status(200).json(result);
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
      }
      break;
  }
}
