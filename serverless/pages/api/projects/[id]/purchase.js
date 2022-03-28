import { getSession, useSession } from "next-auth/react";
import {createNewTransaction, getProjectWalletById} from "../../../../services/PrismaService";
import {getZCTBalance, transferZCT} from "../../../../services/ZCTService";

export default async function handler(req, res) {
    const session = await getSession({req})
    switch (req.method) {
        // Delete data from database
        case "DELETE":
            break;

        // Update data from database
        case "POST":
            if (session){
                const tonnes = req.body[0];
                const date = req.body[1];
                const price = req.body[2];
                const paypalId = req.body[3];
                const projectId=req.query.id
                //date, tonnes, price, paypalId, projectId
                await createNewTransaction(date, tonnes, price, paypalId, projectId, session.user.id)
                const projectWallet = await getProjectWalletById(projectId)
                transferZCT(JSON.parse(projectWallet.ethWallet), `0x${session.user.walletAddress}`, String(tonnes))
                res.status(204).json();
            }
            break;
    }
}
