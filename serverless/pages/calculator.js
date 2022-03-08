import styles from "../styles/Calculator.module.css";
import {
  getCalculatorCategories,
  getCalculatorInputs,
  getCalculatorTypes, getUserCategoryProgress,
} from "../services/CalculatorService";
import ListOfCalculators from "../Components/calculators/ListOfCalculators";
import {session} from "next-auth/core/routes";

export default function Calculator(props) {
  const types = props.types;
  const categories = props.categories;
  const inputs = props.inputs;
  const categoriesCount = props.categoriesCount

  return (
    <div className={styles.container}>
      <h1 className={styles.h1} data-testid="main_heading">
        Carbon Calculators
      </h1>
      <div className="container-md">
        <ListOfCalculators
          categories={categories}
          categoriesCount={categoriesCount}
          types={types}
          inputs={[inputs]}
        />
      </div>
    </div>
  );
}

// This gets called at build time
export async function getStaticProps({ params }) {
  let categories = [];
  let categoriesCount = [];
  let inputs = [];
  let typeId = [];
  let categoryId = [];

  // Adds all Calculator types in a list
  const res = await getCalculatorTypes();
  const types = res.data;

  // Adds the IDs of calculators in a list
  types.map((type) => {
    typeId.push(type.id);
  });

  // Add Calculator Categories into categories for every id of calculators
  for (let i = 0; i < typeId.length; i++) {
    const res = await getCalculatorCategories(typeId[i]);
    const calculatorCategories = res.data
    const res2 = await calculatorCategories.map(getUserCategoryProgress(session.user.id, it))
    categories.push(calculatorCategories);
    categoriesCount.push(res2.data)
  }

  // Add Calculator Inputs for each calculator type
  for (let i = 0; i < typeId.length; i++) {
    for (let b = 0; b < categories[i].length; b++) {
      categoryId = categories[i][b].id;
      const res = await getCalculatorInputs(typeId[i], categoryId);
      inputs.push(res.data);
    }
  }

  // Pass post data to the page via props
  return { props: { types, categories, inputs, categoriesCount } };
}
