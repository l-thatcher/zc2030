import {getListofProjects} from "../../../services/PrismaService";
import {getZCTBalances} from "../../../services/ZCTService";
import {fetchTransactionsByAddress} from "../../../services/WalletService";

export default async function handler(req, res) {

    switch (req.method) {
        // Get data from database
        case "GET":
            const address = req.query.account
            console.log("here111")
            console.log(address)
            try {
                const result = await fetchTransactionsByAddress(address);
                res.status(200).json(result)
            } catch (e) {
                console.log(res);
                res.status(500).json({message: e.message});
            }
            break;
    }
}
