import Link from "next/link";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";

export default function NavBar({ backgroundColor }: any) {
  return (
    <div
      className={styles.topnav}
      id='myTopnav'
      style={{ backgroundColor: backgroundColor }}
    >
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        className={styles.category}
        style={{display:'flex'}}
      >
        <img
          src={
            "https://img.freepik.com/vector-gratis/aplicacion-mercado-digital-negocio-remoto-comercio-electronico-tienda-internet-mercado-movil-cliente-personaje-dibujos-animados-telefono-inteligente-ilustracion-metafora-concepto-aislado-vector_335657-2762.jpg?w=1380&t=st=1669170657~exp=1669171257~hmac=ee596ca525af6ab1db1e2effcfb20ce243966e26043c01a81765b7ce05661551"
          }
          alt='Logo'
          className={styles.logo}
          style={{borderRadius:20}}
        />
         <motion.h1
        style={{ minWidth: 150, paddingLeft: 10, margin: 0 }}
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, type: "spring" }}
      >
        <p style={{ fontSize: 20, textAlign: "center", margin: 0 }}>
          Distribuidora
        </p>
        EL Muñeco
      </motion.h1>
      </motion.div>
     

      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        className={styles.category}
      >
        <Link className={styles.categoryText} href={"/"}>
          Inicio
        </Link>

        <Link className={styles.categoryText} href={"/productos"}>
          Productos
        </Link>

        <button className={styles.btn} onClick={() => console.log("Ingresar")}>
          Ingresar
        </button>
        <button
          className={styles.btn}
          onClick={() => console.log("Registrarme")}
        >
          Registrarme
        </button>
      </motion.div>

      <a className='icon'>
        <i className='fa fa-bars'></i>
      </a>
    </div>
  );
}
