import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ServicesStyles from "../../styles/Services.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const CloudTopUrl = "/assets/images/vectors/Cloud Virtual Machines Illustration.svg";
const CloudHostingUrl = "/assets/images/vectors/Hosting Illustration.svg";
const CloudDBUrl = "/assets/images/vectors/Database Illustration.svg";
const DNSManagementUrl = "/assets/images/vectors/DNS Management Illustration.svg";
const CloudStoreUrl = "/assets/images/vectors/Cloud Storage Illustration.svg";
const CodeChipFrontendDevUrl = "/assets/images/vectors/Code Chip Frontend Development Illustration.svg";
const EditEdUIUXDevUrl = "/assets/images/vectors/EditEd UI-UX Development Illustration.svg";

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
            src={CloudTopUrl}
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
        <Link href="/services/cloudcompute">
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button></Link>
      </div>

      <div className={ServicesStyles.Serv2}>
        <h2 className={ServicesStyles.ServHead}>Host Anything!</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudHostingUrl}
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
            src={CloudDBUrl}
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
        <h2 className={ServicesStyles.ServHead}>Get Professionally Managed DNS!</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={DNSManagementUrl}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
        <p className={ServicesStyles.ServDesc}>
          Get Rid Of Your Headache To Manage DNS And Domains. We Provide Fully Managed DNS
          <br></br>With Cloud Computing, Your Dream Of Tomorrow Won&apos;t Be A
          Dream! It&apos;s Gonna Be A Reality!
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button>
      </div>

      <div className={ServicesStyles.Serv5}>
        <h2 className={ServicesStyles.ServHead}>CloudStore - Cloud Storage</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CloudStoreUrl}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
        <p className={ServicesStyles.ServDesc}>
          Get Each And Every Data Of Your Devices Into Our Cloud Storages! Absolutely Free Of Cost, But With Unlimited Storage And Unlimited Bandwidth. We Offer 3FA Security & Encryption Systems To Keep Your Data Safe And Secure!
          And Of Course, Access From Anywhere, Anytime And From Any Device.
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button>
      </div>

      <div className={ServicesStyles.Serv6}>
        <h2 className={ServicesStyles.ServHead}>FrontEnd Development - <br></br>Powered By The Code Chip</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={CodeChipFrontendDevUrl}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
        <p className={ServicesStyles.ServDesc}>
          Do You Have A Great App Idea ? Make Your Dreams Come True With &quot;The Code Chip&quot;! Be It A Web App, A Desktop Or A Mobile One - We Develop Cross Platform Apps! And Yes - Innovator Gets A Monthly Percentage Of App Revenue Generated As Royalty!
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button>
      </div>

      <div className={ServicesStyles.Serv7}>
        <h2 className={ServicesStyles.ServHead}>UI/UX Development - <br></br>Powered By EditEd</h2>
        <div className={ServicesStyles.ServImg}>
          <Image
            src={EditEdUIUXDevUrl}
            alt="Cloud Virtual Machine Illustration"
            layout="fill"
          />
        </div>
        <p className={ServicesStyles.ServDesc}>
          Are You Building An App Or A Website ? Then, You Have To Use The Best Simplistic And Elegant UI/UX For Your Project, In Order To Survive in today&apos;s market. &quot;EditEd&quot; provides you with all! Choose From Our Library Or Order Your Own!
        </p>
        <button className={ServicesStyles.GetIntoItBtn}>
          Check It Out Now!
        </button>
      </div>
      <Footer />
    </>
  );
}
