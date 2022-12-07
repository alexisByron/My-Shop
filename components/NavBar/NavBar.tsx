import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const useOutsideClick = (callback: { (): void; (): void }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event: any) => {
      callback();
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  });

  return ref;
};

export default function NavBar({ backgroundColor }: any) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useOutsideClick(() => setIsOpenMenu(false));

  return (
    <div
      className={styles.topnav}
      id='myTopnav'
      // style={{ backgroundColor: backgroundColor }}
    >
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        className={styles.category}
        style={{ display: "flex" }}
      >
        <Image
          src={
            "https://img.freepik.com/vector-gratis/aplicacion-mercado-digital-negocio-remoto-comercio-electronico-tienda-internet-mercado-movil-cliente-personaje-dibujos-animados-telefono-inteligente-ilustracion-metafora-concepto-aislado-vector_335657-2762.jpg?w=1380&t=st=1669170657~exp=1669171257~hmac=ee596ca525af6ab1db1e2effcfb20ce243966e26043c01a81765b7ce05661551"
          }
          alt='Logo'
          width={80}
          height={80}
          className={styles.logo}
          style={{ borderRadius: 20 }}
        />
        <motion.h1
          style={{
            minWidth: 150,
            paddingLeft: 10,
            margin: 0,
            color: "rgb(0, 1, 65)",
          }}
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <p style={{ fontSize: 22, textAlign: "center", margin: 0 }}>
            Distribuidora
          </p>
          EL Chamakito brr
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

        {/* <Link className={styles.categoryText} href={"/productos"}>
          Productos
        </Link>
        */}
        <div className={styles.containerBtnLoginRegister}>
          <button
            className={styles.btn}
            onClick={() => console.log("Ingresar")}
          >
            Ingresar
          </button>
          <button
            className={styles.btn}
            onClick={() => console.log("Registrarme")}
          >
            Registrarme
          </button>
        </div>

        <div className={styles.containerBtn}>
          <button
            className={styles.btn}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <Image
              src={"/icons/list.svg"}
              alt='Logo'
              height={20}
              width={20}
              style={{ borderRadius: 20 }}
            />
          </button>
        </div>

        <div
          style={{
            display: isOpenMenu ? "grid" : "none",
            maxWidth: 200,
            marginLeft: "auto",
          }}
        >
          <button
            className={styles.btn}
            onClick={() => console.log("Ingresar")}
          >
            Ingresar
          </button>
          <button
            className={styles.btn}
            onClick={() => console.log("Registrarme")}
          >
            Registrarme
          </button>
        </div>
      </motion.div>
    </div>
  );
}
