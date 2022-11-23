import styles from "./Carrusel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

export default function CustomCarrusel() {
  return (
    // <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false}>
    //   {/* <div className={styles.sliderContainerImg}>
    //     <h1 className={styles.textImage}>Yo que se trabajamos muy bien <br/> Suban el sueldo..</h1>
    //     <img src='https://www.elmuneco.cl/wp-content/uploads/2019/05/distribuidora-el-mu%C3%B1eco-02.jpg' />
    //   </div> */}
    //   <div className={styles.sliderContainerImg}>
    //     <img src='https://www.elmuneco.cl/wp-content/uploads/2019/05/distribuidora-el-mu%C3%B1eco-1.jpg'className={styles.img} />
    //   </div>
    //   <div className={styles.sliderContainerImg}>
    //     <img src='https://www.elmuneco.cl/wp-content/uploads/2019/05/distribuidora-el-mu%C3%B1eco-5.jpg'className={styles.img} />
    //   </div>
    //   <div className={styles.sliderContainerImg}>
    //     <img src='/img/Supermarket.jpg' className={styles.img} />
    //   </div>
    // </Carousel>
    <motion.img
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 3, type: "spring" }}
      src='https://img.freepik.com/vector-gratis/aplicacion-mercado-digital-negocio-remoto-comercio-electronico-tienda-internet-mercado-movil-cliente-personaje-dibujos-animados-telefono-inteligente-ilustracion-metafora-concepto-aislado-vector_335657-2762.jpg?w=1380&t=st=1669170657~exp=1669171257~hmac=ee596ca525af6ab1db1e2effcfb20ce243966e26043c01a81765b7ce05661551'
      className={styles.img}
    />
  );
}
