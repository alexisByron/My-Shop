import styles from "./Partners.module.css";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "rgba(33, 12, 51, 1)" }}>
        Comercios asociados
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className={styles.container}
      >
        <img
          src='https://www.elmuneco.cl/wp-content/uploads/2019/05/pringles-.png'
          alt='Pringles'
          className={styles.img}
        />
        <img
          src='https://www.elmuneco.cl/wp-content/uploads/2019/05/fruna.png'
          alt='Fruna'
          className={styles.img}
        />
        <img
          src='https://www.elmuneco.cl/wp-content/uploads/2019/05/trendy.png'
          alt='Trendy'
          className={styles.img}
        />
        <img
          src='https://www.elmuneco.cl/wp-content/uploads/2019/05/schick.png'
          alt='Schick'
          className={styles.img}
        />
      </motion.div>
    </>
  );
}
