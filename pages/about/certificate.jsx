import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/About.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const CertificateImgUrl = "/assets/images/rasters/Expediuz Certificate Of Recognition.png";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className={Styles.Certificate}>
        <Image
          src={CertificateImgUrl}
          alt="Expediuz Certificate Of Recognition Image"
          layout="fill"
        />
      </div>
      <Footer />
    </>
  );
}
