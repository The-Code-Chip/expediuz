import Head from "next/head";
import Image from "next/image";
import ServicesStyles from "../../styles/Services.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import CloudTop from "../../public/assets/images/vectors/Cloud Virtual Machines Illustration.svg";
import CloudHosting from "../../public/assets/images/vectors/Hosting Illustration.svg"
import CloudDB from "../../public/assets/images/vectors/Database Illustration.svg"

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
        <h2 className={ServicesStyles.ServHead}>CloudTops - Cloud Computing</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudTop}
            alt="Cloud Tops Illustration"
            layout="fill"
          />
        </div>
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

      <div className={ServicesStyles.Serv2}>
        <h2 className={ServicesStyles.ServHead}>Host Anything!</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudHosting}
            alt="Cloud Hosting Illustration"
            layout="fill"
          />
        </div>
        <p className={ServicesStyles.ServDesc}>
          Expediuz Provides You With The Next Level Hosting Systems, Available For All Kinds Of App & Web Hosting! Deploy A HTML, PHP, Python, Node JS Website, A Native Application Or An API!
          <br></br>You Name It!
          <br></br>We&apos;ll Get You Covered!
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button>
      </div>

      <div className={ServicesStyles.Serv3}>
        <h2 className={ServicesStyles.ServHead}>CloudBase - Managed Databases<br></br>On The Cloud!</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudDB}
            alt="Cloud DataBase Illustration"
            layout="fill"
          />
        </div>
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

      <div className={ServicesStyles.Serv4}>
        <h2 className={ServicesStyles.ServHead}>CloudTops - Cloud Computing</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudTop}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
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

      <div className={ServicesStyles.Serv5}>
        <h2 className={ServicesStyles.ServHead}>CloudTops - Cloud Computing</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudTop}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
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

      <div className={ServicesStyles.Serv6}>
        <h2 className={ServicesStyles.ServHead}>CloudTops - Cloud Computing</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudTop}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
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
