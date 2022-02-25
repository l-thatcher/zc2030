import {sql_query} from "../../utils/db";

const getCalculatorCategory = `SELECT * FROM CALC_CATEGORY`;
const getCalculatorInput = `SELECT * FROM CALC_INPUT`;
const getCalculatorResult = `SELECT * FROM CALC_INPUT`;


const handler = async (_, res) => {
    try {
        const result = await sql_query( getCalculatorCategory
        );

        return res.json(result)
    } catch (e) {

        console.log(res)
        res.status(500).json({ message: e.message});

    }
};



export default handler;