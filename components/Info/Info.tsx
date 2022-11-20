import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <div style={{ padding: 50, maxWidth: 400 }}>
        <h4 style={{ textAlign: "center" }}>Despacho en 24 horas</h4>
        <p>
          Para su comodidad, contamos con despacho las 24 horas en las comunas
          de: Conchalí, Independencia, Recoleta, Huechuraba, Colina, Lampa,
          Quilicura, Cerro Navia, Lo Prado, Quinta Normal, Pudahuel y Renca.
        </p>
      </div>
      <div style={{ marginBottom: 10 }}>
        <h4 style={{ textAlign: "center" }}>Flujo de compra</h4>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                backgroundColor: "rgba(66, 24, 102, 1)",
                maxHeight: 300,
                maxWidth: 250,
                borderRadius: 15,
                marginRight: 10,
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src='/icons/register.png'
                  alt='registro'
                  style={{ height: 50, width: 50, padding: 5 }}
                />
                <p
                  style={{
                    fontSize: 14,

                    paddingRight: 10,
                    color: "rgba(237, 216, 255, 1)",
                  }}
                >
                  Registrate
                </p>
              </div>
              <p
                style={{
                  fontSize: 12,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: "rgba(237, 216, 255, 1)",
                  marginTop: 0,
                }}
              >
                Es muy importante para poder entrarte la mejor atencion
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(66, 24, 102, 1)",
                maxHeight: 300,
                maxWidth: 250,
                borderRadius: 15,
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                marginTop: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src='/icons/list.png'
                  alt='list'
                  style={{ height: 50, width: 50, padding: 5 }}
                />
                <p
                  style={{
                    fontSize: 14,
                    paddingRight: 10,
                    color: "rgba(237, 216, 255, 1)",
                  }}
                >
                  Selecciona los productos
                </p>
              </div>
              <p
                style={{
                  fontSize: 12,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: "rgba(237, 216, 255, 1)",
                  marginTop: 0,
                }}
              >
                Una vez generes la compra con el pago recibiras un comprobante
                al correo registrado
              </p>
            </div>
          </div>

          <div
            style={{ display: "flex", marginTop: 10, flexDirection: "column" }}
          >
            <div
              style={{
                backgroundColor: "rgba(66, 24, 102, 1)",
                maxHeight: 300,
                maxWidth: 250,
                borderRadius: 15,
                marginRight: 10,
                boxShadow: "0px 0px 10px 0px rgba(66, 24, 102, 1)",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src='/icons/mensaje.png'
                  alt='mensaje'
                  style={{ height: 50, width: 50, padding: 5 }}
                />
                <p
                  style={{
                    fontSize: 14,
                    paddingRight: 10,
                    color: "rgba(237, 216, 255, 1)",
                  }}
                >
                  Escribenos
                </p>
              </div>
              <p
                style={{
                  fontSize: 12,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: "rgba(237, 216, 255, 1)",
                  marginTop: 0,
                }}
              >
                Escribenos cualquier duda o consulta que tengas, antes de
                comprar para que podamos brindarte la mejor experiencia
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(66, 24, 102, 1)",
                maxHeight: 300,
                maxWidth: 250,
                borderRadius: 15,
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                marginTop: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src='/icons/shop.png'
                  alt='shop'
                  style={{ height: 50, width: 50, padding: 5 }}
                />
                <p
                  style={{
                    fontSize: 14,
                    paddingRight: 10,
                    color: "rgba(237, 216, 255, 1)",
                  }}
                >
                  Pronto recibiras tus productos
                </p>
              </div>
              <p
                style={{
                  fontSize: 12,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: "rgba(237, 216, 255, 1)",
                  marginTop: 0,
                }}
              >
                Si la ubicacion de entrega es en las comunas indicadas con
                despacho expres espera tu pedido en 24 horas, de lo contrario
                nos comprometemos a entregarlo en un maximo de 72 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
