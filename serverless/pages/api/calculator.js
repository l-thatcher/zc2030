import {sql_query} from "../../utils/db";

const getCalculatorTypeById = `SELECT * FROM CalculatorType WHERE CalculatorType.id = 1`;

const handler = async (_, res) => {
  try {
    const result = await sql_query(getCalculatorCategory);

    return res.json(result);
  } catch (e) {
    console.log(res);
    res.status(500).json({message: e.message});
  }
};

export default handler;
