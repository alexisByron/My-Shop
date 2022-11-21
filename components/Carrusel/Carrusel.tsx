import styles from "./Carrusel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CustomCarrusel() {
  return (
    <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false}>
      <div className={styles.sliderContainerImg}>
        <h1 className={styles.textImage}>Yo que se trabajamos muy bien <br/> Suban el sueldo..</h1>
        <img src='https://www.elmuneco.cl/wp-content/uploads/2019/05/distribuidora-el-mu%C3%B1eco-02.jpg' />
      </div>
      <div className={styles.sliderContainerImg}>
        <img src='https://www.elmuneco.cl/wp-content/uploads/2019/05/distribuidora-el-mu%C3%B1eco-1.jpg' />
      </div>
      <div className={styles.sliderContainerImg}>
        <img src='https://www.elmuneco.cl/wp-content/uploads/2019/05/distribuidora-el-mu%C3%B1eco-5.jpg' />
      </div>
      <div className={styles.sliderContainerImg}>
        <img src='/img/Supermarket.jpg' />
      </div>
    </Carousel>
  );
}
