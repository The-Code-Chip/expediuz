import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/About.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className={Styles.AboutUs}>
        <h2 className={Styles.AboutHead}>
          Ever Wanted To Know More About Us ? <br></br>
          Here&apos;s <br></br>
          All About Expediuz Information Services !
        </h2>
        <p className={Styles.AboutDesc}>
          Expediuz Information Services Private Limited was originally a
          passionate project founded by Late Sir Dhritiman Basu in the early
          2017&apos;s. The project aimed at offering passionate developers with
          Backend services at the lowest prices among all competitors. We
          understood that every person might have the wish to host his/her own
          app and make a successful project out of it. Thus, after a hundred
          days of consultation with the Indian Government and our Sales
          Department, we finally launched the project on the historic date of
          26/05/2017.
          <br></br>
          <br></br>
          Our primary mission thus lies to make Backend Services available to
          all with too much affordable prices, thus boosting people who are
          wrongly tagged as Backward classes, as the greatest future lies in
          their fists only!
          <br></br>
          <br></br>
          Should you wish, then it will be our pleasure of you to take a closer
          look at our startup certificate!
        </p>
        <Link href="/about/certificate">
          <button className={Styles.GetIntoItBtn}>
            Look At Our Certificate!
          </button>
        </Link>
        <h2 className={Styles.StandOutHead}>
          We Have Something That Makes Us Stand Out!
        </h2>
        <p className={Styles.StandOutDesc}>
          We are strong believers of Deep Work! And it has been proven multiple
          times that Tech automations can&apos;t be more smarter than Human
          labour. So, what we do is that, we don&apos;t always rely on
          automating our Customer Services. We have our staffs sitting for you
          who individually handle all your given tasks. We thus aim at providing
          the best customer experience with 24x7 customer service system. The
          most amazing features of such an implementation are many:
          <br></br>
          <br></br>
          1. There are staffs sitting for you who directly take your requests
          and process them manually.
          <br></br>
          <br></br>
          2. You don&apos;t need to be a Tech Savvy to use our services. You get
          to directly talk to the person concerned with your project, who does
          his best to serve you with the best results ever possible! The user is
          thus relieved of any kind of headache.
          <br></br>
          <br></br>
          3. The staffs also ensure the ultimate security encyrptions. Customers
          are provided with 3FA Encryption at no extra costs.
          <br></br>
          <br></br>
          4. You get to talk to the Tech Professional concerned with your
          project 24x7 and he will answer you as soon as possible!
          <br></br>
          <br></br>
          5. We have got some of the fastest workers round there. You get you
          job done within minutes and with no errors.
          <br></br>
          <br></br>
          6. Our console is based on the same principle. I looks more or less
          like a chatbox, where you get access to your entire project and
          commands, which allows the Tech Professional, who has been assigned
          for your projects, understand your interests and act accordingly. Thus
          minimalistic commands would fetch you something incredible.
          <br></br>
          <br></br>
          7. You also get access to live support in implementing our services in
          your code at no extra cost. A pretty much wholesome documentation also
          exists at your disposal, available round the clock!
        </p>
        <h2 className={Styles.StandOutHead}>From The Desk Of Directors !</h2>
        <p className={Styles.StandOutDesc}>
          Mr. Dhritiman Basu alias DMan, a young entrepreneur director of
          Expediuz Information Services Pvt Ltd. has left for his last journey
          on 14th October 2021.<br></br><br></br>We are proud of his entrepreneurship to be a part
          of Digital India Programme. But His sudden demise at the age of 32 has
          shattered us.<br></br><br></br>We have taken over the charge as Directors with an
          oath to fulfill his dreams of being a part of Digital India.<br></br><br></br>In this
          context, we retained our experienced professionals who will be always
          at your service as was given to you earlier. We value our long
          business mutual relationship. Looking forward for your valuable patronage
          in the years ahead as had been given to our predecessor.<br></br><br></br>
          With Thanks,<br></br>
          Sumita Basu & Chaitali Bardhan [Board Of Directors]
        </p>
      </div>

      <Footer />
    </>
  );
}
