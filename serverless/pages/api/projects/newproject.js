// import {createNewProject} from "../../../services/PrismaService";
//
// export default async function handler(req, res) {
//     switch (req.method) {
//         // Get data from database
//         case "POST":
//             try {
//                 const result = await createNewProject(`id`, `projectname`, `projectimage1`, `projectimage2`, `projectimage3`, `projectimage4`, `cptgbp`, `latitude`, `longitude`, `streetname`, `city`, `county`, `country`, `totalsupply`, `remainingsupply`, `ownerpicture`, `type`, `website`, `description`, `datefounded`, `nftaddress`);
//                 res.status(200).json(result);
//             } catch (e) {
//                 res.status(500).json({ message: e.message });
//             }
//             break;
//
//         // Create data from database
//         case "GET":
//             break;
//
//         // Delete data from database
//         case "DELETE":
//             break;
//
//         // Update data from database
//         case "PUT":
//             break;
//     }
// }
