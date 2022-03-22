import { getSession, useSession } from "next-auth/react";
import {getProjectWalletById} from "../../../../services/PrismaService";
import {transferZCT} from "../../../../services/ZCTService";

export default async function handler(req, res) {
    const session = await getSession({req})
    switch (req.method) {
        // Delete data from database
        case "DELETE":
            break;

        // Update data from database
        case "POST":
            if (session){
                const amount = req.body[0];
                const projectWallet = await getProjectWalletById(req.query.id)
                transferZCT(projectWallet, session.user.walletAddress, String(amount))
            }
            break;
    }
}
