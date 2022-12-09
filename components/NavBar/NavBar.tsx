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
    <div className={styles.topnav} id='myTopnav'>
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        className={styles.category}
        style={{ display: "flex" }}
      >
        <Image
          src={"/icons/logo.png"}
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
            color: "rgba(62, 176, 184)",
          }}
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <p style={{ fontSize: 22, textAlign: "center", margin: 0 }}>
            Distribuidora Vinos
          </p>
          Chamakito brr
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

        <div className={styles.containerBtnLoginRegister}>
          <Link href={"/login"} className={styles.btn}>
            Ingresar
          </Link>

          <Link
            href={"/login"}
            className={styles.btn}
            onClick={() => console.log("Ingresar")}
          >
            Registrarme
          </Link>
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
          <Link href={"/login"} className={styles.btn}>
            Ingresar
          </Link>

          <Link href={"/login"} className={styles.btn}>
            Registrarme
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
