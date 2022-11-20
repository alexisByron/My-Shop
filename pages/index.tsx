import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import CustomCarrusel from "../components/Carrusel/Carrusel";
import Partners from "../components/Partners/Partners";
import Contact from "../components/Contact/Contact";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App Next.Js</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <NavBar />
        <CustomCarrusel />
        <Partners />
        <Info />
        <Contact />
      </div>
<Footer />
   
    </div>
  );
}
