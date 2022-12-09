import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import FiltersProductList from "../../components/FiltersProductList/FiltersProductList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vinos Chamakito</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/icons/logo.png' />
      </Head>

      <div>
        <NavBar />
        <FiltersProductList />
        <ProductList />
      </div>

      <Footer />
    </div>
  );
}
