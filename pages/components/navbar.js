import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/Index.module.css";
import Logo from "../../public/assets/images/vectors/Expediuz Logo (White).svg";

export default function navbar() {
  return (
    <>
      <nav className={Styles.NavBar}>
        <div className={Styles.NavLogo}>
          <Image
            className={Styles.LogoImg}
            src={Logo}
            alt="Expediuz Logo"
            layout="fill"
          />
        </div>
        <h2 className={Styles.ExpediuzBranding}>
          Expediuz Information Services
        </h2>

        <ul className={Styles.NavUl}>
          <li className={Styles.NavLi}>
            <Link href="/">Home</Link>
          </li>
          <li className={Styles.NavLi}>
            <Link href="/services/">Our Services</Link>
          </li>
          <li className={Styles.NavLi}>
            <Link href="/code">Learn To Code</Link>
          </li>
          <li className={Styles.NavLi}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={Styles.NavLi}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        <button className={Styles.ConsoleBtn}>Console</button>
      </nav>
    </>
  );
}
