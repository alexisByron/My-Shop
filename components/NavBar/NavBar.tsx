import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/user/userReducer";
import { useRouter } from "next/router";

export default function NavBar({ backgroundColor }: any) {
  const user = useSelector((state: any) => state);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const testFn = () => {
    console.log("isOpenMenu", isOpenMenu);
    setIsOpenMenu(isOpenMenu ? false : true);
  };

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
            color: "rgba(243, 220, 174)",
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
        className={`${styles.category} ${styles.category2}`}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link className={styles.categoryText} href={"/"}>
            Inicio
          </Link>

          {user !== undefined && user.token === "" ? (
            <div className={styles.containerBtnLoginRegister}>
              <Link
                href={{
                  pathname: "/login",
                }}
                className={styles.btn}
              >
                Ingresar
              </Link>

              <Link
                className={styles.btn}
                href={{
                  pathname: "/login",
                  query: { page: "register" }, // the data
                }}
              >
                Registrarme
              </Link>
            </div>
          ) : (
            <div className={styles.containerBtnLoginRegister}>
              <Link className={styles.categoryText} href={"/"}>
                Productos
              </Link>
              <p className={styles.categoryText}>{user.userName}</p>
              <button
                onClick={() => {
                  dispatch(logout());
                  // router.push("/login");
                }}
              >
                <p className={styles.categoryText}>salir</p>
              </button>
            </div>
          )}

          <div className={styles.containerBtn}>
            <button className={styles.btn} onClick={() => testFn()}>
              <Image
                src={"/icons/list.svg"}
                alt='Logo'
                height={20}
                width={20}
                style={{ borderRadius: 20 }}
              />
            </button>
          </div>
        </div>
        {
          //botonera responsive
          isOpenMenu && (
            <div className={styles.containerMenuResponsive}>
              {user !== undefined && user.token === "" ? (
                <>
                  <Link href={"/login"} className={styles.btn}>
                    Ingresar
                  </Link>

                  <Link
                    href={{
                      pathname: "/login",
                      query: { page: "register" }, // the data
                    }}
                    className={styles.btn}
                  >
                    Registrarme
                  </Link>
                </>
              ) : (
                <div
                  // className={styles.containerBtnLoginRegister}
                  style={{ display: "grid", maxWidth: 200, marginLeft: "auto" }}
                >
                  <Link className={styles.btn} href={"/"}>
                    Productos
                  </Link>
                  <p className={styles.btn}>{user.userName}</p>

                  <p
                    onClick={() => {
                      dispatch(logout());
                      // router.push("/login");
                    }}
                    className={styles.btn}
                  >
                    salir
                  </p>
                </div>
              )}
            </div>
          )
        }
      </motion.div>
    </div>
  );
}
