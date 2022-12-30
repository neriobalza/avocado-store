import Layout from "@layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  // Providers - Context/Providers, Themes, Data
  // Layout
  // Props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
