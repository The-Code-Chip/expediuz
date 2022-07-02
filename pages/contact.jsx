import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/About.module.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <h2 className={Styles.AboutHead}>
        Contact Us In Any Situation!<br></br>We Will Try Our Best To Meet Your
        Needs!
      </h2>
      <ul className={Styles.ContactUl}>
        <li className={Styles.ContactLi1}>
          <h2 className={Styles.ContactH2}>
            Lead Technical Developer And Consultant<br></br>Sourashis
          </h2>
          <p className={Styles.ContactP}>
            Contact Me in case our Expediuz Console stops responding or in case
            of any Technical Issue or Query!<br></br>
            Mention Me with @techdev in Expediuz Console<br></br>
            Email Me at: techdev@expediuz.com<br></br>
            Message Me at: @itzsourashis [Instagram]
          </p>
          <Link href="mailto: techdev@expediuz.com">
            <button className={Styles.GetIntoItBtn}>Email Me !</button>
          </Link>
        </li>
        <li className={Styles.ContactLi1}>
          <h2 className={Styles.ContactH2}>
            Lead Business Manager<br></br>Pallab
          </h2>
          <p className={Styles.ContactP}>
            Contact Me in case to collaborate with Expediuz or for information
            regarding Custom Large Scaled Project Quotes!<br></br>
            Mention Me with @businessdev in Expediuz Console<br></br>
            Email Me at: businessdev@expediuz.com<br></br>
            Message Me at: +91 98305 23508 [WhatsApp]
          </p>
          <Link href="mailto: businessdev@expediuz.com">
            <button className={Styles.GetIntoItBtn}>Email Me !</button>
          </Link>
        </li>
        <li className={Styles.ContactLi1}>
          <h2 className={Styles.ContactH2}>
            Lead Project Manager<br></br>Bob D
          </h2>
          <p className={Styles.ContactP}>
            Contact Me in case any of your Custom Scaled Project comes to a halt
            for Technical Reasons or to rely on Expediuz for your Next Upcoming
            Project<br></br>
            Mention Me with @projman in Expediuz Console<br></br>
            Email Me at: bob@expediuz.com<br></br>
            Message Me at: [Not Available For Time Being]
          </p>
          <Link href="mailto: bob@expediuz.com">
            <button className={Styles.GetIntoItBtn}>Email Me !</button>
          </Link>
        </li>
        {/*<li className={Styles.ContactLi1}>
          <h2 className={Styles.ContactH2}>
            Lead Technical Developer And Consultant <br></br>Sourashis Ghosh Roy
          </h2>
          <p className={Styles.ContactP}>
            Contact Me in case our Expediuz Console stops responding or in case
            of any Technical Issue or Query!<br></br>
            Mention Me with @techdev in Expediuz Console<br></br>
            Email Me at: techdev@expediuz.com<br></br>
            Message Me at: @itzsourashis [Instagram]
          </p>
          <Link href="mailto: techdev@expediuz.com">
          <button className={Styles.GetIntoItBtn}>Email Me !</button></Link>
        </li>
        <li className={Styles.ContactLi1}>
          <h2 className={Styles.ContactH2}>
            Lead Technical Developer And Consultant <br></br>Sourashis Ghosh Roy
          </h2>
          <p className={Styles.ContactP}>
            Contact Me in case our Expediuz Console stops responding or in case
            of any Technical Issue or Query!<br></br>
            Mention Me with @techdev in Expediuz Console<br></br>
            Email Me at: techdev@expediuz.com<br></br>
            Message Me at: @itzsourashis [Instagram]
          </p>
          <Link href="mailto: techdev@expediuz.com">
          <button className={Styles.GetIntoItBtn}>Email Me !</button></Link>
        </li>
        <li className={Styles.ContactLi1}>
          <h2 className={Styles.ContactH2}>
            Lead Technical Developer And Consultant <br></br>Sourashis Ghosh Roy
          </h2>
          <p className={Styles.ContactP}>
            Contact Me in case our Expediuz Console stops responding or in case
            of any Technical Issue or Query!<br></br>
            Mention Me with @techdev in Expediuz Console<br></br>
            Email Me at: techdev@expediuz.com<br></br>
            Message Me at: @itzsourashis [Instagram]
          </p>
          <Link href="mailto: techdev@expediuz.com">
          <button className={Styles.GetIntoItBtn}>Email Me !</button></Link>
        </li>*/}
      </ul>
      <Footer />
    </>
  );
}
