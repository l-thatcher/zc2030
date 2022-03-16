import "../styles/globals.css";
import "../styles/Header.module.css";
import Layout from "../Components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </SessionProvider>
    </SSRProvider>
  );
}

export default MyApp;
