import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/Index.module.css";
import Logo from "../../public/assets/images/vectors/Expediuz Logo (White).svg";

export default function navbar() {
  return (
    <>
      <footer className={Styles.Footer}>
        <div className={Styles.FooterLogo}>
          <Image
            src={Logo}
            className={Styles.FooterLogoImg}
            alt="Expediuz Logo"
            layout="fill"
          />
        </div>
        <h2 className={Styles.ExpediuzHead}>Expediuz Information Services</h2>
        <Link href="">
          <p className={Styles.Policies}>Privacy Policy</p>
        </Link>
        <p className={Styles.Power}>Powered By The Code Chip</p>
        <p className={Styles.Ver}>Website Version : 3.5.a</p>
      </footer>
    </>
  );
}
