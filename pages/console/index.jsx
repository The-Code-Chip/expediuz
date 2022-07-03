import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/Console.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { SignInWithGooge } from "../firebase.jsx"

export default function Console() {
    return (
      <>
      <Head>
        <title>Console - BackEnd In Minutes - Expediuz Information Services!</title>
        <meta name="description" content="Learn About All Our Services!" />
      </Head>
      <NavBar />
      <Footer />
      </>
    )
}