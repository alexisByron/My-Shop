import styles from "./Carrusel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Image from "next/image";
export default function CustomCarrusel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, type: "spring" }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={6000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <Image
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className={styles.img}
          width={400}
          height={400}
        />
        <Image
          src='https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          className={styles.img}
          width={400}
          height={400}
        />
        <Image
          src='https://media.istockphoto.com/id/485876046/es/foto/vi%C3%B1edos-del-sur-de-estiria-cerca-de-gamlitz-antes-de-extraer-austria.jpg?s=612x612&w=is&k=20&c=WQtLbfALV7ZLNbSSMH9oCVb0a70cim1-ale1KC50TeY='
          className={styles.img}
          width={400}
          height={400}
        />
        <Image
          src='https://cdn.pixabay.com/photo/2017/01/09/02/02/pink-wine-1964457__340.jpg'
          className={styles.img}
          width={400}
          height={400}
        />
        <Image
          src='https://cdn.pixabay.com/photo/2017/07/20/23/19/wine-2524100__340.jpg'
          className={styles.img}
          width={400}
          height={400}
        />
        <Image
          src='https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613__340.jpg'
          className={styles.img}
          width={400}
          height={400}
        />
        <Image
          src='https://cdn.pixabay.com/photo/2021/12/18/06/01/wine-6878013__340.jpg'
          className={styles.img}
          width={400}
          height={400}
        />
      </Carousel>
    </motion.div>
  );
}
