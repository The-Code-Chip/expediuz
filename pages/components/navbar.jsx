import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/Index.module.css";
import Logo from "../../public/assets/images/vectors/Expediuz Logo (White).svg";
import MenuDrawer from "../../public/assets/images/vectors/Menu Drawer.svg";
import MenuCloser from "../../public/assets/images/vectors/Menu Closer.svg";

function Toggle() {
  var Button = document.getElementById("Btn1");
  var Button2 = document.getElementById("Btn2");
  var MenuDrawer = document.getElementById("MenuDrawer");
  var MenuCloser = document.getElementById("MenuCloser");
  var ButtonListUl = document.getElementById("ResNavUl");
  var ButtonListLi1 = document.getElementById("ResNavLi1");
  var ButtonListLi2 = document.getElementById("ResNavLi2");
  var ButtonListLi3 = document.getElementById("ResNavLi3");
  var ButtonListLi4 = document.getElementById("ResNavLi4");
  var ButtonListLi5 = document.getElementById("ResNavLi5");
  var ButtonListLi6 = document.getElementById("ResNavLi6");
  var ButtonListBtn1 = document.getElementById("ResNavBtn1");
  var ButtonListBtn2 = document.getElementById("ResNavBtn2");
  var ButtonListBtn3 = document.getElementById("ResNavBtn3");
  var ButtonListBtn4 = document.getElementById("ResNavBtn4");
  var ButtonListBtn5 = document.getElementById("ResNavBtn5");
  var ButtonListBtn6 = document.getElementById("ResNavBtn6");
  Button.style.display = "none";
  MenuDrawer.style.display = "none";
  Button2.style.display = "block";
  MenuCloser.style.display = "block";
  ButtonListUl.style.display = "block";
  ButtonListLi1.style.display = "block";
  ButtonListLi2.style.display = "block";
  ButtonListLi3.style.display = "block";
  ButtonListLi4.style.display = "block";
  ButtonListLi5.style.display = "block";
  ButtonListLi6.style.display = "block";
  ButtonListBtn1.style.display = "block";
  ButtonListBtn2.style.display = "block";
  ButtonListBtn3.style.display = "block";
  ButtonListBtn4.style.display = "block";
  ButtonListBtn5.style.display = "block";
  ButtonListBtn6.style.display = "block";
}
function Toggle2() {
  var Button = document.getElementById("Btn1");
  var Button2 = document.getElementById("Btn2");
  var MenuDrawer = document.getElementById("MenuDrawer");
  var MenuCloser = document.getElementById("MenuCloser");
  var ButtonListUl = document.getElementById("ResNavUl");
  var ButtonListLi1 = document.getElementById("ResNavLi1");
  var ButtonListLi2 = document.getElementById("ResNavLi2");
  var ButtonListLi3 = document.getElementById("ResNavLi3");
  var ButtonListLi4 = document.getElementById("ResNavLi4");
  var ButtonListLi5 = document.getElementById("ResNavLi5");
  var ButtonListLi6 = document.getElementById("ResNavLi6");
  var ButtonListBtn1 = document.getElementById("ResNavBtn1");
  var ButtonListBtn2 = document.getElementById("ResNavBtn2");
  var ButtonListBtn3 = document.getElementById("ResNavBtn3");
  var ButtonListBtn4 = document.getElementById("ResNavBtn4");
  var ButtonListBtn5 = document.getElementById("ResNavBtn5");
  var ButtonListBtn6 = document.getElementById("ResNavBtn6");
  Button.style.display = "block";
  MenuDrawer.style.display = "block";
  Button2.style.display = "none";
  MenuCloser.style.display = "none";
  ButtonListUl.style.display = "none";
  ButtonListLi1.style.display = "none";
  ButtonListLi2.style.display = "none";
  ButtonListLi3.style.display = "none";
  ButtonListLi4.style.display = "none";
  ButtonListLi5.style.display = "none";
  ButtonListLi6.style.display = "none";
  ButtonListBtn1.style.display = "none";
  ButtonListBtn2.style.display = "none";
  ButtonListBtn3.style.display = "none";
  ButtonListBtn4.style.display = "none";
  ButtonListBtn5.style.display = "none";
  ButtonListBtn6.style.display = "none";
}

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

        <button id="Btn1" onClick={Toggle} className={Styles.NavBtn}>
          <div id="MenuDrawer" className={Styles.MenuDrawer}>
            <Image src={MenuDrawer} alt="MenuDrawer" layout="fill" />
          </div>
        </button>

        <button id="Btn2" onClick={Toggle2} className={Styles.NavBtn2}>
          <div id="MenuCloser" className={Styles.MenuCloser}>
            <Image src={MenuCloser} alt="MenuDrawer" layout="fill" />
          </div>
        </button>

        <ul id="ResNavUl" className={Styles.ResNavUl}>
          <li id="ResNavLi1" className={Styles.ResNavLi}>
            <button id="ResNavBtn1" className={Styles.ResNavBtn}>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li id="ResNavLi2" className={Styles.ResNavLi}>
            <button id="ResNavBtn2" className={Styles.ResNavBtn}>
              <Link href="/services/">Our Services</Link>
            </button>
          </li>
          <li id="ResNavLi3" className={Styles.ResNavLi}>
            <button id="ResNavBtn3" className={Styles.ResNavBtn}>
              <Link href="/code">Learn To Code</Link>
            </button>
          </li>
          <li id="ResNavLi4" className={Styles.ResNavLi}>
            <button id="ResNavBtn4" className={Styles.ResNavBtn}>
              <Link href="/about">About Us</Link>
            </button>
          </li>
          <li id="ResNavLi5" className={Styles.ResNavLi}>
            <button id="ResNavBtn5" className={Styles.ResNavBtn}>
              <Link href="/contact">Contact Us</Link>
            </button>
          </li>
          <li id="ResNavLi6" className={Styles.ResNavLi}>
            <button id="ResNavBtn6" className={Styles.ResNavBtn}>
              <Link href="/contact">Console</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
