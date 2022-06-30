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
          CloudBase - Managed Databases !
        </h2>

        <p className={ServicesStyles.PepTalkAboutServices}>
          Learn How we make Databases a joke !
        </p>
      </div>
      <div className={ServicesStyles.CloudComputes}>
        <p className={ServicesStyles.PepTalkAboutServices}>
          What is a Database ?
        </p>

        <p className={ServicesStyles.ServicesDesc}>
          In computing, a database is an organized collection of data stored and
          accessed electronically. Small databases can be stored on a file
          system, while large databases are hosted on computer clusters or cloud
          storage.
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
          2. The Ultimate Features Of Modern Databases- We support it all !
          <br></br>
          3. From over a hundred locations all over the world, choose any location for the best performance.
          <br></br>
          4. We have ultrafast SSD storages and with unlimited bandwidth. Get
          the same, undiminished performance at anywhere, anytime you wish!
          <br></br>
          5. Our Databases support all sorts of datatypes! Integer, Double, Object, Blobs - You name it! We Have It All!
          <br></br>
          6. Keep your database plan online whenever needed. Else turn it off! In
          this way, you save a huge margin of your money and also electricity.
          Of Course, Switching on - off is just a matter of 1/8th of a second.
          <br></br>
          7. Your Database is managed in realtime by our engineers 24x7, paired
          with 3FA Security.
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>Jump Into It</button>
      </div>
      <Footer />
    </>
  );
}
