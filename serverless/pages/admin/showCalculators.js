import CalculatorTypes from "../../Components/admin/calculators/CalculatorTypes";
import { getCalculatorTypes } from "../../services/CalculatorService";
import { useRouter } from "next/router";

export default function showCalculators(props) {
  const types = props.types;

  return <CalculatorTypes types={types}/>;
}

export async function getStaticProps(context) {
  const typesRes = await getCalculatorTypes();
  const types = typesRes.data;
  return { props: { types } };
}
