import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/Pages.module.css";
import Logo from "../../public/assets/images/vectors/Expediuz Logo (White).svg";

export default function navbar() {
    return (
        <>
        <footer className={Styles.Footer}>
            <div className={Styles.FooterLogo}>
                <Image src={Logo} className={Styles.FooterLogoImg}
                alt="Expediuz Logo"
                layout="fill"/>
            </div>
        </footer>
        </>
    );
}