import CalculatorTypes from "../calculators/CalculatorTypes";
import { getCalculatorTypes } from "../../../services/CalculatorService";
import { useRouter } from "next/router";

export default function showCalculators(props) {
  const types = props.types;

  return <CalculatorTypes types={types} />;
}
