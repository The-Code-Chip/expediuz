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

        <p className={ServicesStyles.PepTalkAboutServices}>
          Learn How Cloud Computing Will Change Tomorrow!
        </p>
      </div>
      <div className={ServicesStyles.CloudComputes}>
        <p className={ServicesStyles.PepTalkAboutServices}>
          What is Cloud Computing ?
        </p>

        <p className={ServicesStyles.ServDesc}>
          Cloud computing is the on-demand availability of computer system
          resources, especially data storage and computing power, without direct
          active management by the user.
          <br></br>
          <br></br>
          <p className={ServicesStyles.PepTalkAboutServices}>
            Now ! What makes us better ?
          </p>
          <br></br>
          <br></br>
          1. We have easily scalable systems to meet your each and every requirement. You can switch the systems with just a click!
          <br></br>
          2. Our systems support each and every Operating System available on the market. Ranging from Windows 11 to Mac OS Catalina 10.15.7, even Linux and Android, we have it all!
          <br></br>
          3. As our systems support Touchscreen Supported OS as well (Like Android, iOS & More), we also provide ready to use emulators.
        </p>
      </div>
      <Footer />
    </>
  );
}
