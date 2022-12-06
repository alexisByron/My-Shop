import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
    {
      name: "Pedro Perez",
      Shopname: "Tienda de pedro",
      coment:
        "Excelente servicio, muy buenos productos, muy recomendado aunque un poco caro creo que podrian bajar un poco los precios",
      valoracion: 5,
    },
  ]);

  const returnArrayByNumber = (valoracion: number) => {
    return Array.from({ length: valoracion }, (v, i) => i);
  };

  return (
    <div>
      <h1 style={{ color: "rgb(0, 1, 65)", textAlign: "center" }}>
        La opion de nuestros clientes es importante
      </h1>
      <div
        style={{
          display: "flex",
          overflow: "auto",
        }}
      >
        {coments.map((coment, index) => {
          return (
            <motion.div
              key={index}
              initial={{ x: -400 * index }}
              animate={{ x: 0 }}
              transition={{ duration: 5, type: "spring" }}
              style={{
                width: 500,
                margin: 10,
                height: 200,
                padding: 10,
                backgroundColor: "rgb(0, 1, 65)",
                borderRadius: 20,
                boxShadow: "1px 1px 5px 1px rgba(43, 184, 184)",
                border: "1px solid rgba(43, 184, 184)",
                color: "black",
              }}
            >
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 400,
                }}
              >
                <h3 style={{ color: "rgba(62, 176, 184)" }}>{coment.name}</h3>
                <div>
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
              <p style={{ color: "rgba(62, 176, 184)" }}>{coment.Shopname}</p>
              <div
                style={{
                  display: "flex",
                  width: 400,
                  wordBreak: "break-word",
                  position: "initial",
                }}
              >
                <p style={{ width: 400, color: "rgba(62, 176, 184)" }}>
                  {coment.coment}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
