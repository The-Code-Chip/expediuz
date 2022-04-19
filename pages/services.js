import Head from "next/head";
import Image from "next/image";
import ServicesStyles from "../styles/Services.module.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function OurServices() {
  return (
    <>
      <Head>
        <title>BackEnd In Minutes - Expediuz Information Services!</title>
        <meta name="description" content="Learn About All Our Services!" />
      </Head>
      <NavBar />
      <div className={ServicesStyles.AllServices}>
        <h2 className={ServicesStyles.ServicesHeading}>Hello</h2>
      </div>
      <Footer />
    </>
  );
}
