import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import CustomCarrusel from "../components/Carrusel/Carrusel";
import Partners from "../components/Partners/Partners";
import Contact from "../components/Contact/Contact";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";
import ComentList from "../components/ComentList/ComentList";
import { motion } from "framer-motion";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

export function AnalyticsWrapper() {
  return <Analytics />;
}

export default function Home() {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.container}>
        <Head>
          <title>Vinos Chamakito</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/icons/logo.png' />
        </Head>

        <>
          <div className={styles.backgroundImageTest}>
            <NavBar />
            <div
              style={{
                display: "flex",
                padding: "0px 40px 0px 40px",
                maxHeight: 600,
                color: "rgb(81, 64, 21)",
              }}
            >
              <div className={styles.ContainerInfoHeader}>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, type: "spring" }}
                >
                  Distribuidora Vinos El Chamakito Brr
                </motion.h1>
                <motion.div
                  style={{ display: "flex", position: "relative" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 0.1, type: "spring" }}
                >
                  <Image
                    src='/icons/phone.png'
                    alt='phone'
                    width={30}
                    height={30}
                    style={{
                      placeSelf: "center",
                      margin: "0px 5px 0px 5px",
                    }}
                  />
                  <h3>+56 2 0000 7074</h3>
                </motion.div>
                <motion.div
                  style={{ display: "flex", position: "relative" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 0.15, type: "spring" }}
                >
                  <Image
                    src='/icons/location.png'
                    alt='location'
                    width={30}
                    height={30}
                    style={{
                      placeSelf: "center",
                      margin: "0px 5px 0px 5px",
                    }}
                  />

                  <h3>Mi casita 420, Quilicura, Santiago</h3>
                </motion.div>
                <motion.div
                  style={{ display: "flex", position: "relative" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 0.2, type: "spring" }}
                >
                  <Image
                    src='/icons/phone.png'
                    alt='phone'
                    width={30}
                    height={30}
                    style={{
                      placeSelf: "center",
                      margin: "0px 5px 0px 5px",
                    }}
                  />

                  <h3>+56 2 0000 5602</h3>
                </motion.div>
                <motion.div
                  style={{ display: "flex", position: "relative" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 0.25, type: "spring" }}
                >
                  <Image
                    src='/icons/mail.png'
                    alt='mail'
                    width={30}
                    height={30}
                    style={{
                      placeSelf: "center",
                      margin: "0px 5px 0px 5px",
                    }}
                  />
                  <h3>Contactar por Email</h3>
                </motion.div>
                <motion.div
                  style={{
                    width: "100%",
                    alignItems: "flex-end",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 0.3, type: "spring" }}
                >
                  <button
                    className={styles.btn}
                    onClick={() => console.log("Ingresar")}
                  >
                    Contactanos Ahora
                  </button>
                </motion.div>
              </div>
              <div className={styles.ContainerImgHeader}>
                <CustomCarrusel />
              </div>
            </div>
          </div>
          <Info />
          <Partners />
          <ComentList />
          <Contact />
        </>
      </div>
      <Footer />
      <AnalyticsWrapper />
    </div>
  );
}
