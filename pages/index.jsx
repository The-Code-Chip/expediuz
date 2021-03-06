import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/Index.module.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const ServerImgUrl = "/assets/images/vectors/Servers Illustration.svg";
const CloudVMImgUrl =
  "/assets/images/vectors/Cloud Virtual Machines Illustration.svg";
const HostingImgUrl = "/assets/images/vectors/Hosting Illustration.svg";
const DatabaseImgUrl = "/assets/images/vectors/Database Illustration.svg";
const DeepWorkImgUrl = "/assets/images/vectors/Deep Work Illustration.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>BackEnd In Minutes - Expediuz Information Services!</title>
        <meta
          name="description"
          content="The Best One-Stop Backend Solution! Bringing Backend At Your Fingertips!"
        />
        <link rel="shortcut icon" href="../public/Logo Favicon.ico" />
      </Head>

      <NavBar />

      <div className={Styles.OurSlogan}>
        <div className={Styles.ServersIllustration}>
          <Image src={ServerImgUrl} alt="Servers Illustration" layout="fill" />
        </div>

        <h2 className={Styles.SloganText}>
          Get Sharp, Sleek & Sensible Results at your Fingertips!
        </h2>

        <p className={Styles.WhatWeHave}>
          With Ultrafast Server Instances, an experienced developer team and
          personal customer service, achieve the best results, what we have to
          offer you! The lowest subscriptions ranks us among our competitors.
        </p>

        <Link href="/services">
          <button className={Styles.QuoteBtn}>Request A Quote ?</button>
        </Link>
        <Link href="/services">
          <button className={Styles.OfferBtn}>What We Offer ?</button>
        </Link>
      </div>

      <div className={Styles.Featured1}>
        <div className={Styles.FeaturedIllustration}>
          <Image
            src={CloudVMImgUrl}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>

        <h2 className={Styles.FeaturedHeading}>
          Exclusive Remotes Elastic Cloud Computes!
        </h2>

        <p className={Styles.SpecialInOurServices}>
          Unlimited Bandwidths ? Ultrafast SSD Storages ? Graphics Engine ? Top
          Notch Intel & AMD CPUs ? Windows, Mac OS, Linux Servers ? Scalable
          Computing ? Developer -Friendly Budgets ? What More ? <br></br> We
          have it all!<br></br> Get It Now !
        </p>

        <Link href="/services/cloudcompute">
          <button className={Styles.GetIntoItBtn}>Get Into It ?</button>
        </Link>
      </div>

      <div className={Styles.Featured2}>
        <div className={Styles.FeaturedIllustration}>
          <Image
            src={HostingImgUrl}
            alt="Cloud Hosting Illustration"
            layout="fill"
          />
        </div>

        <h2 className={Styles.FeaturedHeading}>Dynamic Hosting Made Easy!</h2>

        <p className={Styles.SpecialInOurServices}>
          Scalable Hosting Solutions! Host & Deploy A Python, PHP, Node JS,
          Static HTML Web App or Test APIs Easily & Efficiently! <br></br>{" "}
          Budget Friendly Hosting Solutions ? Free SSL Certificate ? Custom
          Domains, DNS Management & Nameservers ? All In A Single Subscription!{" "}
          <br></br> We provide it all! <br></br> Get It Now !
        </p>

        <Link href="/services/hosting">
          <button className={Styles.GetIntoItBtn}>Get Into It ?</button>
        </Link>
      </div>

      <div className={Styles.Featured3}>
        <div className={Styles.FeaturedIllustration}>
          <Image
            src={DatabaseImgUrl}
            alt="Database Illustration"
            layout="fill"
          />
        </div>

        <h2 className={Styles.FeaturedHeading}>
          Database Management? Not A Headache Anymore!
        </h2>

        <p className={Styles.SpecialInOurServices}>
          Your Data, Secured With 2FA Encryption! Full Administrator Controls,
          Built To Gift Perfection To Your Tech Ambitions! From Realtime
          Databases To Cloud Storage,<br></br> We provide it all! <br></br> Get
          It Now !
        </p>

        <Link href="/services/cloudbase">
          <button className={Styles.GetIntoItBtn}>Get Into It ?</button>
        </Link>
      </div>

      <div className={Styles.Featured4}>
        <div className={Styles.FeaturedIllustration}>
          <Image
            src={DeepWorkImgUrl}
            alt="Deep Work Illustration"
            layout="fill"
          />
        </div>

        <h2 className={Styles.FeaturedHeading}>
          We Have A Unique System By Which We Handle Your Projects!
        </h2>

        <p className={Styles.SpecialInOurServices}>
          We Have Realtime Staffs, Sitting To Manage Your Projects. Any Problem,
          If Pops Out, Gets Solved Out In Minutes. In Fact, Your Security, Being
          Of Utmost Priority Is Being Taken Care Of 24x7. Contact The
          Professional Anytime To Know About The Realtime Status Of Your
          Project! Keeping The Same Thing In Mind, We Have Designed Our Console
          In The Manner Of A Realtime Chat System, Instead Of Overwhelming Menus
          And Options. Any Non-Technical Guy Can Also Master Himself At This
          Intricate Art!
        </p>
      </div>

      <Footer />
    </>
  );
}
