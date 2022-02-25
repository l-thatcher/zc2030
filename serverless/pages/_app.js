import '../styles/globals.css'
import '../styles/Header.module.css'
import Layout from "../Components/layout/Layout";



function MyApp({ Component, pageProps }) {

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
