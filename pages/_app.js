import PlausibleProvider from "next-plausible";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="https://chatgpt-conf.vercel.app">
      <ThemeProvider defaultTheme="system" attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
