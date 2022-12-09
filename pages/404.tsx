import Link from "next/link";
import styles from "../styles/404.module.css";
/**
 * función kla
 * *cualquier wea con color verde
 * !esta wea es alerta
 * TODO: MEJORAR
 * @param {text}
 * @returns {text}
 */
const FourOhFour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 style={{ fontSize: 300, color:'rgb(62, 176, 184, 0.7)' }}>404</h1>

        <h1 style={{color:'white',textShadow:'1px 1px 10px black'}}>La pagina a donde intentaste acceder no fue encontrada</h1>
        <Link
          href='/'
          style={{
            color: "#2bb8b8",
            fontSize: 35,
            fontWeight: "800",
            backgroundColor:'#000141',
            padding: '10px 25px 10px 25px',
            borderRadius: 40,
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default FourOhFour;
