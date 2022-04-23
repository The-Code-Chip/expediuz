import Head from "next/head";
import Image from "next/image";
import ServicesStyles from "../../styles/Services.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import CloudVMImg from "../../public/assets/images/vectors/Cloud Virtual Machines Illustration.svg";

export default function OurServices() {
  return (
    <>
      <Head>
        <title>BackEnd In Minutes - Expediuz Information Services!</title>
        <meta name="description" content="Learn About All Our Services!" />
      </Head>
      <NavBar />
      <div className={ServicesStyles.Services}>
        <h2 className={ServicesStyles.ServicesHeading}>Cloud Computing</h2>

        <p className={ServicesStyles.PepTalkAboutServices}>Learn How Cloud Computing Will Change Tomorrow!</p>
      </div>
      <div className={ServicesStyles.RemoteDesktops}>
        <p className={ServicesStyles.ServicesDesc}>
        </p>
      </div>
      <Footer />
    </>
  );
}