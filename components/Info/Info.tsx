import styles from "./Info.module.css";
import { motion } from "framer-motion";

export default function Info() {
  const cards = [
    {
      title: "Despacho en 24 horas",
      description:
        "Despacho en menos de 24 horas, dentro de las comunas de Conchalí, Independencia, Recoleta, Huechuraba,Colina, Lampa, Quilicura, Cerro Navia,Lo Prado, Quinta Normal, Pudahuel y Renca.",
      icon: "/icons/truck.png",
    },
    {
      title: "Descuentos exclusivos",
      description:
        "Al ser cliente habitual recibiras descuentos exclusivos en tus compras. solo debes registrarte y listo.",
      icon: "/icons/discount.png",
    },
    {
      title: "Misión",
      description:
        "Nuestro principal objetivo como empresa es ser su canal de comunicación y distribución entre los grandes proveedores y el comercio minorista o almaceneros. Nuestro Servicio de distribución.",
      icon: "/icons/partner.png",
    },
    {
      title: "10 años de experiencia",
      description:
        "Mas de 10 años de experiencia en el rubro de la distribución de productos de consumo masivo. Dando una experiencia de calidad a nuestros clientes.",
      icon: "/icons/certificado.png",
    },
  ];

  return (
    <motion.div
      className={styles.container}
      initial={{ margin: 0, opacity: 0 }}
      animate={{ marginTop: 40, opacity: 1 }}
      transition={{ duration: 4, type: "spring" }}
    >
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div style={{ width: "100%", textAlign: "center", marginTop: 10 }}>
            <motion.img
              src={card.icon}
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
            {card.title}
          </motion.h3>
          <motion.p
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{ duration: 4, type: "spring" }}
          >
            {card.description}
          </motion.p>
        </div>
      ))}
    </motion.div>
  );
}
