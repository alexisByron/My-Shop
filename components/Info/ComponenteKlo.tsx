import styles from "./Info.module.css";
import { motion } from "framer-motion";

interface IComponenteKlo {
  index: number;
  title: string;
  description: string;
  icon: string;
}

const ComponenteKlo = ({ index, title, description, icon }: IComponenteKlo) => (
  <div key={index} className={styles.card}>
    <div style={{ width: "100%", textAlign: "center", marginTop: 10 }}>
      <motion.img
        src={icon}
        alt='Icon'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, type: "spring" }}
      />
    </div>
    <motion.h3
      initial={{ x: 10 }}
      animate={{ x: -10 }}
      transition={{ duration: 4, type: "spring" }}
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ y: 10 }}
      animate={{ y: -10 }}
      transition={{ duration: 4, type: "spring" }}
    >
      {description}
    </motion.p>
  </div>
);

export default ComponenteKlo;
