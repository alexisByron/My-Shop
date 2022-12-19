import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./ComentList.module.css";
import React from "react";

export default function ComentList() {
  const [coments, setComents] = useState([
    {
      name: "Juan Perez",
      Shopname: 'Supermercado "El Muñeco"',
      coment:
        "Excelente servicio, muy buenos productos, muy recomendado aunque un poco caro creo que podrian bajar un poco los precios",
      valoracion: 4,
    },
    {
      name: "Maria Perez",
      Shopname: "Tienda de maria",
      coment:
        "Excelente servicio, muy buenos productos, muy recomendado aunque un poco caro creo que podrian bajar un poco los precios",
      valoracion: 2.5,
    },
    {
      name: "Pedro Perez",
      Shopname: "Tienda de pedro",
      coment:
        "Excelente servicio, muy buenos productos, muy recomendado aunque un poco caro creo que podrian bajar un poco los precios",
      valoracion: 4.5,
    },
    {
      name: "Pedro Perez",
      Shopname: "Tienda de pedro",
      coment:
        "Excelente servicio, muy buenos productos, muy recomendado aunque un poco caro creo que podrian bajar un poco los precios",
      valoracion: 3.5,
    },
    // {
    //   name: "Pedro Perez",
    //   Shopname: "Tienda de pedro",
    //   coment:
    //     "Excelente servicio, muy buenos productos, muy recomendado aunque un poco caro creo que podrian bajar un poco los precios",
    //   valoracion: 5,
    // },
  ]);

  const returnArrayByNumber = (valoracion: number) => {
    return Array.from({ length: valoracion }, (v, i) => i);
  };

  return (
    <>
    <h1 style={{ color: "rgb(81, 64, 21)", textAlign: "center" }}>
        Los Comentarios de nuestros clientes nos interesan
      </h1>
    <div style={{overflow:'auto'}}>
      <div className={styles.container}>
        {coments.map((coment, index) => {
          return (
            <motion.div
              key={index}
              initial={{ x: -400 * index }}
              animate={{ x: 0 }}
              transition={{ duration: 5, type: "spring" }}
              className={styles.items}
            >
              <div key={index} className={styles.card}>
                <h3 style={{ color: "rgba(243, 220, 174)" }}>{coment.name}</h3>
                <div >
                  <>
                    {returnArrayByNumber(coment.valoracion).map(
                      (item, index) => (
                        <Image
                          src='/icons/estrella.png'
                          alt='estrella'
                          width={30}
                          height={30}
                          key={index}
                        />
                      )
                    )}
                    {coment.valoracion % 1 !== 0 ? (
                      <Image
                        src='/icons/mitadEstrella.png'
                        alt='estrella'
                        width={30}
                        height={30}
                      />
                    ) : (
                      <> </>
                    )}
                  </>
                </div>
              </div>
              <p style={{ color: "rgba(243, 220, 174)" }}>{coment.Shopname}</p>
              <div>
                <p style={{ color: "rgba(243, 220, 174)" }}>{coment.coment}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div></>
  );
}
