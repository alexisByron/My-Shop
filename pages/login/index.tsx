import styles from "./login.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div id={styles.__loginContainer}>
      <div className={styles.containerCentered}>
        <div className={styles.containerLogin}>
          <div className={styles.pictureContainer}>
            <h1 className={styles.title}>Bienvenido a Chamakito Brr</h1>
            <Image
              src='/icons/logo.png'
              alt='elMuñecoInstagram'
              width={200}
              height={200}
              className={styles.pictureLogo}
            />
            <h1 className={styles.title}>
              Al ingresar podrás tener acceso a un montón de descuentos
              exclusivos solo para clientes
            </h1>
          </div>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Ingresar</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ textAlign: "center" }}
              className={styles.form}
            >
              <div className={styles.rowContactField}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  {...register("usuario")}
                  placeholder='Usuario'
                  className={styles.input}
                />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                  {...register("contrasena", { required: true })}
                  placeholder='Constraseña'
                  className={styles.input}
                />
                <p className={styles.recoverPass}>Olvide mi contraseña</p>
                {/* errors will return when field validation fails  */}
              </div>

              <div className={styles.ButtonFormContainer}>
                <input
                  type='submit'
                  className={styles.ButtonForm}
                  value={"Ingresar"}
                />
                <Link
                  href={"/"}
                  className={styles.ButtonForm}
                >
                  Registrarme
                </Link>
                <Link
                  href={"/"}
                  className={styles.ButtonForm}
                >
                  Continuar como invitado
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
