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
          CloudStore - Storage For Professionals !
        </h2>

        <p className={ServicesStyles.PepTalkAboutServices}>
          Learn How we make Cloud Storage a joke !
        </p>
      </div>
      <div className={ServicesStyles.CloudComputes}>
        <p className={ServicesStyles.PepTalkAboutServices}>
          What is a Cloud Storage ?
        </p>

        <p className={ServicesStyles.ServicesDesc}>
          Cloud storage is a model of computer data storage in which the digital
          data is stored in logical pools, said to be on &quotthe cloud&quot.
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
          2. All sorts of files are supported by our Storage Systems! Link any file extension with any software and access it from anywhere.
          <br></br>
          3. We have ultrafast SSD storages and with unlimited bandwidth. Get
          the same, undiminished performance at anywhere, anytime you wish!
          <br></br>
          4. With incredible speeds, we lead the industry.
          <br></br>
          5. Your File Directories is managed in realtime by our engineers 24x7, paired with
          3FA Security.
          <br></br>
          <br></br>
          We are also after developing a dedicated website and cross-platform app for the Cloud Storage! It is going to come out soon, than you expect!
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>Jump Into It</button>
      </div>
      <Footer />
    </>
  );
}
