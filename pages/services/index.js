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
        <h2 className={ServicesStyles.ServicesHeading}>Our Services</h2>

        <p className={ServicesStyles.PepTalkAboutServices}>
          Learn more about the curated and expertised services offered by
          Expediuz!
        </p>
      </div>
      <div className={ServicesStyles.Serv1}>
        
        <h2 className={ServicesStyles.ServHead}>
          Cloud Computing & Desktops
        </h2>
        <div className={ServicesStyles.ServImg}><Image src={CloudVMImg} alt="Cloud Virtual Machine Illustration"
            layout="fill"/></div>
        <p className={ServicesStyles.ServDesc}>
          Expediuz Serves You The Next Level Cloud Computer Systems, Which Can
          Be Made Available For Any Purpose And With Any Specifications!
          <br></br>With Cloud Computing, Your Dream Of Tomorrow Won&apos;t Be A
          Dream! It&apos;s Gonna Be A Reality!
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button>
      </div>
      <Footer />
    </>
  );
}
