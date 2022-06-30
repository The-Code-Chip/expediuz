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
        <h2 className={ServicesStyles.ServicesHeading}>Host Anything !</h2>

        <p className={ServicesStyles.PepTalkAboutServices}>
          Learn How we make Hosting a joke !
        </p>
      </div>
      <div className={ServicesStyles.CloudComputes}>
        <p className={ServicesStyles.PepTalkAboutServices}>
          What is Hosting ?
        </p>

        <p className={ServicesStyles.ServicesDesc}>
          Hosting enables to bring out the presence of any application or a website on to the World Wide Web and to make it accessible from every part of the Earth.
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
          2. We offer both VPS and Shared Hosting facilities. This, thus helps to keep you focussed on your code, without maintaining unnecessary data.
          <br></br>
          3. We offer high speed CDNs which cache your website wherever and whenever needed, by using Artificial Intelligence and thus provides end user the best results.
          <br></br>
          4. We have ultrafast SSD storages and with unlimited bandwidth. Get
          the same, undiminished performance at anywhere, anytime you wish!
          <br></br>
          5. Keep your hosting plan online whenever needed. Else turn it off! In this way, you save a huge margin of your money and also electricity. Of Course, Switching on - off is just a matter of 1/8th of a second.
          <br></br>
          6. Your Hosting is managed in realtime by our engineers 24x7, paired
          with 3FA Security.
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>Jump Into It</button>
      </div>
      <Footer />
    </>
  );
}
