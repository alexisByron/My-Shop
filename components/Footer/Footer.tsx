import styles from "./Home.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer} style={{ fontSize: 14, paddingTop:30, paddingBottom:30 }}>
      <div className={styles.container}>
        <div style={{ display: "grid" }}>
          <div style={{display:'flex'}}>
            
            <ul style={{ maxHeight: 50, maxWidth: 70, marginRight:10 }}>
              <Image
                src={"/icons/logo.png"}
                alt='Logo'
                width={60}
                height={50}
              />
            </ul>
            <h2 style={{alignSelf:'center'}}>El chamakito brr.</h2>
          </div>
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
        </div>

        <div>
          <h4 style={{ fontSize: 16, justifyContent:'flex-start' }}>Informacion de contacto</h4>
          <ul>
            <span>+56 2 2627 4855</span>
          </ul>
          <ul>
            <span>Mi casita 420, Quilicura, Santiago</span>
          </ul>
          <ul>
            <span>info@chamakitovinos.cl</span>
          </ul>
        </div>

        <div style={{ display: "grid" }}>
          <h4 style={{ fontSize: 16 }}>
            Suscribiere para recibir información
          </h4>
          <div style={{ display: "flex", height:40 }}>
            <input type='email' placeholder='Email' style={{width:'100%'}} />
            <button>Suscribirme</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
