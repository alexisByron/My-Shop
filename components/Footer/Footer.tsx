import styles from "./Home.module.css";

export default function Footer(){
    return    <footer className={styles.footer} style={{ fontSize: 14 }}>
    <div className={styles.container}>
      <div style={{display:'flex'}}>
      <div>
        <h4 style={{ fontSize: 16 }}>Informacion de contacto</h4>
        <ul>
          <span style={{ fontSize: 14 }}>+56 2 2603 7074</span>
        </ul>
        <ul>
          <span>+56 2 2627 4855</span>
        </ul>
        <ul>
          <span>+56 2 2603 5602</span>
        </ul>
        <ul>
          <span>info@elmuneco.cl</span>
        </ul>
      </div>

      <div style={{ marginLeft: 40 }}>
        <h4 style={{ fontSize: 16 }}>Dirección</h4>
        <ul>
          <span>Lucila Godoy 374, Quilicura, Santiago</span>
        </ul>
        <ul>
          <span>Ubicacion en mapa</span>
        </ul>
      </div>
      </div>
      <div style={{display:'flex'}}>
     <div style={{display:'flex'}}>
     <ul>
        <img src='/icons/insta.svg' alt='elMuñecoInstagram' />
      </ul>
      <ul>
        <img src='/icons/facebook.svg' alt='elMuñecoFacebook' />
      </ul>
     </div>
      <ul style={{ maxHeight: 100, maxWidth: 150 }}>
        <img
          src={
            "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png"
          }
          alt='Logo'
          style={{ maxHeight: 100, maxWidth: 150 }}
          // className={styles.logo}
        />
      </ul>
    </div>
    </div>
  </footer>
}