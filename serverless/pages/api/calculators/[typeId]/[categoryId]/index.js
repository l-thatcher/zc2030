import { execute_query } from "../../../../../utils/db";

const getCalculatorInputsByCategoryId = ` SELECT CalculatorInput.id, CalculatorInput.name, CalculatorInput.factor, CalculatorInput.unit 
                                          FROM CalculatorCategory
                                          JOIN CalculatorInput ON CalculatorCategory.id = CalculatorInput.category_id
                                          WHERE CalculatorCategory.id = ?`;

export default async function handler(req, res) {
  const { categoryId } = req.query;
  switch (req.method) {
    // Get data from database
    case "GET":
      try {
        const result = await execute_query(
          getCalculatorInputsByCategoryId,
          categoryId
        );
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    // Create data from database
    case "POST":
      break;

    // Delete data from database
    case "DELETE":
      break;

    // Update data from database
    case "PUT":
      break;
  }
}
