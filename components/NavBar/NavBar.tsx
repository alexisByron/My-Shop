import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.topnav} id='myTopnav'>
      <img
        src={
          "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png"
        }
        alt='Logo'
        className={styles.logo}
      />
      <div className={styles.category}>
        <a className={styles.categoryText} href='/'>
          Inicio
        </a>
        <a className={styles.categoryText} href='/test'>
          Productos
        </a>
      </div>

      <div>
        <button className={styles.btn} onClick={() => console.log("Ingresar")}>
          Ingresar
        </button>
        <button className={styles.btn} onClick={() => console.log("Registrarme")}>
          Registrarme
        </button>
      </div>

      <a className='icon'>
        <i className='fa fa-bars'></i>
      </a>
    </div>
  );
}
