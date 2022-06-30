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
        <h2 className={ServicesStyles.ServicesHeading}>
          Professionally Managed DNS !
        </h2>

        <p className={ServicesStyles.PepTalkAboutServices}>
          Learn How we make DNS Management a joke !
        </p>
      </div>
      <div className={ServicesStyles.CloudComputes}>
        <p className={ServicesStyles.PepTalkAboutServices}>What is a DNS ?</p>

        <p className={ServicesStyles.ServicesDesc}>
          The Domain Name System is the hierarchical and decentralized naming
          system used to identify computers reachable through the Internet or
          other Internet Protocol networks. The resource records contained in
          the DNS associate domain names with other forms of information.
          <br></br>
          <br></br>
        </p>
        <p className={ServicesStyles.PepTalkAboutServices2}>
          Now ! What makes us better ?
        </p>
        <p className={ServicesStyles.ServicesDesc2}>
          <br></br>
          <br></br>
          1. We have easily scalable plans to meet your each and every
          requirement. You can switch the plans with just a click!
          <br></br>
          2. We have all sorts of records supported - From MX records to Nameservers, etc.
          <br></br>
          3. From over a hundred locations all over the world, choose any
          location for the best performance.
          <br></br>
          4. With incredible speeds, we lead the industry.
          <br></br>
          5. Your DNS is managed in realtime by our engineers 24x7, paired
          with 3FA Security.
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>Jump Into It</button>
      </div>
      <Footer />
    </>
  );
}
