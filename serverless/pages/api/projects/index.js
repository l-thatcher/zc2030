import {getListofProjects} from "../../../services/PrismaService";
import {createNewProject} from "../../../services/PrismaService";


export default async function handler(req, res) {
    switch (req.method) {
        // Get data from database
        case "GET":

            break;

        // Create data from database
        case "POST":
            const projectname = req.body[1];
            const projectimage1 = req.body[2];
            const projectimage2 = req.body[3];
            const projectimage3 = req.body[4];
            const projectimage4 = req.body[5];
            const cptgbp = req.body[6];
            const latitude = req.body[7];
            const longitude = req.body[8];
            const streetname = req.body[9];
            const city = req.body[10];
            const county = req.body[11];
            const country = req.body[12];
            const totalsupply = req.body[13];
            const remainingsupply = req.body[14];
            const ownerpicture = req.body[15];
            const type = req.body[16];
            const website = req.body[17];
            const description = req.body[18];
            const datefoudned = req.body[19];
            const nftaddress = req.body[20]
            try {
                const result = await createNewProject();
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
            break;
    }
}
