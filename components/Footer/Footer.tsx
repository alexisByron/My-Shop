import styles from "./Home.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer} style={{ fontSize: 14 }}>
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <div>
            <h4 style={{ fontSize: 16 }}>Informacion de contacto</h4>
            <ul>
              <span style={{ fontSize: 14 }}>+56 2 0000 7074</span>
            </ul>
            <ul>
              <span>+56 2 2627 4855</span>
            </ul>
            <ul>
              <span>+56 2 0000 5602</span>
            </ul>
            <ul>
              <span>info@chamakitovinos.cl</span>
            </ul>
          </div>

          <div style={{ marginLeft: 40 }}>
            <h4 style={{ fontSize: 16 }}>Dirección</h4>
            <ul>
              <span>Mi casita 420, Quilicura, Santiago</span>
            </ul>
            <ul>
              <span>Ubicacion en mapa</span>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <ul>
              <Image
                src='/icons/insta.svg'
                alt='elMuñecoInstagram'
                width={50}
                height={50}
              />
            </ul>
            <ul>
              <Image
                src='/icons/facebook.svg'
                alt='elMuñecoFacebook'
                width={50}
                height={50}
              />
            </ul>
          </div>
          <ul style={{ maxHeight: 50, maxWidth: 70 }}>
            <Image src={"/icons/logo.png"} alt='Logo' width={60} height={50} />
          </ul>
        </div>
      </div>
    </footer>
  );
}
