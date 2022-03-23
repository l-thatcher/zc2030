import CalculatorTypes from "../../Components/admin/calculators/CalculatorTypes";
import { getCalculatorTypes } from "../../services/CalculatorService";
import { useRouter } from "next/router";
import {getSession, useSession} from "next-auth/react";

export default function showCalculators(props) {
  const types = props.types;
  const { data: session } = useSession();
  console.log(session)
  return <CalculatorTypes types={types}/>;
}

export async function getServerSideProps(context) {

  const session = await getSession(context)
  const typesRes = await getCalculatorTypes()
  ;
  // console.log(typesRes.data)
  // console.log(session)
  // console.log(session.user.role);
  const types = typesRes.data;
  return {
    props: {
      session,
      types } };
}
