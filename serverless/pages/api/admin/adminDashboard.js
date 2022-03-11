import {sql_query} from "../../../utils/db";

const getUserData = `SELECT * FROM USER`;

const handler = async (_, res) => {
    try {
        const result = await sql_query(getUserData);

        return res.json(result);
    } catch (e) {
        console.log(res);
        res.status(500).json({message: e.message});
    }
};

export default handler;
