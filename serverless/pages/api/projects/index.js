import {
  editProjectById,
  getListofProjects,
} from "../../../services/PrismaService";
import { createNewProject } from "../../../services/PrismaService";
import { getSession } from "next-auth/react";
import { createEncryptedWallet } from "../../../services/Web3jsService";
import {getZCTBalance, mintZCT} from "../../../services/ZCTService";
import log from "tailwindcss/lib/util/log";

const getCalculatorTypes = `SELECT * FROM Projects`;

export default async function handler(req, res) {
  switch (req.method) {
    // Get data from database
    case "GET":
      try {
        const result = await getListofProjects(getCalculatorTypes);
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    // Create data from database
    case "POST":
      try {
        const wallet = createEncryptedWallet();
        const result = await createNewProject(
          req.body,
          JSON.stringify(wallet),
          wallet.address
        );
        mintZCT(`0x${wallet.address}`, req.body.totalsupply)
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
