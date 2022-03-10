import {sql_query} from "../../utils/db";

const getCalculatorTypeById = `SELECT * FROM CalculatorType WHERE CalculatorType.id = 1`;

const getCalculatorTypeByName = `SELECT * FROM CalculatorType WHERE CalculatorType.name = "Individual"`;

const handler = async (_, res) => {
    try {
        const result = await sql_query(getCalculatorTypeById
        );

        return res.json(result)
    } catch (e) {

        console.log(res)
        res.status(500).json({message: e.message});
        console.log(res)

    }
};



export default handler;