import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/About.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutUs() {
    return (
      <>
      <NavBar />
      <div className={Styles.CertificateBox}></div>
      <Footer />
      </>
    );
}