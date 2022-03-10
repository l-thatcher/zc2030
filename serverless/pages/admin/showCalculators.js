import CalculatorTypes from "../../Components/admin/calculators/CalculatorTypes";
import { getCalculatorTypes } from "../../services/CalculatorService";

export default function showCalculators(props) {
  const types = props.types;
  return <CalculatorTypes types={types} />;
}

export async function getStaticProps(context) {
  const typesRes = await getCalculatorTypes();
  const types = typesRes.data;
  console.log(types);
  return { props: { types } };
}
