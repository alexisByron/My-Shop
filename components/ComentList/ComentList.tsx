import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

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
              backgroundColor: "#f1ebea",
              borderRadius: 20,
              boxShadow: "3px 6px 6px 3px rgb(0 0 0 / 60%)",
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
              <h3>{coment.name}</h3>
              <div>
                <>
                  {returnArrayByNumber(coment.valoracion).map((item) => (
                    <img
                      src='/icons/estrella.png'
                      alt='estrella'
                      style={{ height: 30, width: 30 }}
                    />
                  ))}
                  {coment.valoracion % 1 !== 0 ? (
                    <img
                      src='/icons/mitadEstrella.png'
                      alt='estrella'
                      style={{ height: 30, width: 30 }}
                    />
                  ) : (
                    <> </>
                  )}
                </>
              </div>
            </div>
            <p>{coment.Shopname}</p>
            <div
              style={{
                display: "flex",
                width: 400,
                wordBreak: "break-word",
                position: "initial",
              }}
            >
              <p style={{ width: 400 }}>{coment.coment}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
