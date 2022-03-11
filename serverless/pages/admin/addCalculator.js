import { getSession, useSession } from "next-auth/react";
import CalculatorCategory from "../../Components/admin/calculators/CalculatorCategory";
import styles from "../../styles/Calculator.module.css";
import CalculatorInput from "../../Components/admin/calculators/CalculatorInput";
import {getCalculatorCategories, getCalculatorInputs} from "../../services/CalculatorService";

export default function addCalculator(props) {

  const categories = props.categories;
  const inputs = props.inputs;

  const background4 = "/calculator_background_3.jpg";

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background4})`, padding: "50px" }}
    >
      <h1 data-testid="main_heading">Carbon Calculators</h1>
      <div className="container-md">
        <CalculatorCategory categories={categories} inputs={inputs}/>
      </div>
    </div>
  );
}

// This gets called at build time
export async function getServerSideProps(context) {

  let typeId = 1;
  let inputs = [];
  let categoryId = [];

  // Adds all Calculator categories in a list
  const categoriesRes = await getCalculatorCategories(typeId);
  const categories = categoriesRes.data;

  // Adds the IDs of categories in a list
  categories.map((category) => {
      categoryId.push(category.id);
  });

  // Add Calculator Inputs for the category
  for (let i = 0; i < categoryId.length; i++) {
    for (let b = 0; b < categories.length; b++) {
      categoryId = categories[b].id;
      const res = await getCalculatorInputs(typeId[i], categoryId);
      inputs.push(res.data);
    }
  }

  // Pass post data to the page via props
  return { props: { inputs, categories } };
}
