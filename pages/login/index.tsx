import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [typeForm, setTypeForm] = useState("login");

  const FormLogin = () => (
    <motion.div
      initial={{ opacity: 0, transform: "rotate3d(0, 1, 0, 180deg)" }}
      animate={{
        transform: "rotate3d(0, 1, 0, 0deg)",
        opacity: 1,
      }}
      transition={{ duration: 1, type: "spring", stiffness: 20 }}
      className={styles.formContainer}
    >
      <h1 className={styles.title}>Bienvenido a Chamakito Brr</h1>
      <motion.img
        key={"/icons/logo.png"}
        src={"/icons/logo.png"}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0 }}
        className={styles.pictureLogoResponsive}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center" }}
        className={styles.form}
      >
        <div className={styles.gridInputs}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("usuario")}
            placeholder='Usuario'
            className={styles.input}
          />

          <input
            {...register("contrasena", { required: true })}
            placeholder='Constraseña'
            className={styles.input}
          />
          <p className={styles.recoverPass}>Olvide mi contraseña</p>
        </div>

        <div className={styles.ButtonFormContainer}>
          <input
            type='submit'
            className={styles.ButtonForm}
            value={"Ingresar"}
          />
          <button
            className={styles.ButtonForm}
            onClick={() => setTypeForm("register")}
          >
            Registrarme
          </button>
          <Link href={"/"} className={styles.ButtonForm}>
            Continuar como invitado
          </Link>
        </div>
      </form>
    </motion.div>
  );

  const FormRegister = () => (
    <motion.div
      initial={{ opacity: 0, transform: "rotate3d(0, 1, 0, -180deg)" }}
      animate={{
        transform: "rotate3d(0, 1, 0, 0deg)",
        opacity: 1,
      }}
      transition={{ duration: 1, type: "spring", stiffness: 20 }}
      className={styles.formContainer}
    >
      <h1 className={styles.title}>Registrate a Chamakito Brr</h1>
      <motion.img
        key={"/icons/logo.png"}
        src={"/icons/logo.png"}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0 }}
        className={styles.pictureLogoResponsive}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center" }}
        className={styles.form}
      >
        <div className={styles.gridInputs}>
          <input
            {...register("correo")}
            placeholder='Email'
            className={styles.input}
          />
          <input
            {...register("usuario")}
            placeholder='Usuario'
            className={styles.input}
          />
          <input
            {...register("direccion")}
            placeholder='direccion'
            className={styles.input}
          />
          <input
            {...register("contrasena", { required: true })}
            placeholder='Constraseña'
            className={styles.input}
          />
          <input
            {...register("contrasena2", { required: true })}
            placeholder='Confirme constraseña'
            className={styles.input}
          />
          <p className={styles.recoverPass}>Olvide mi contraseña</p>
        </div>

        <div className={styles.ButtonFormContainer}>
          <input
            type='submit'
            className={styles.ButtonForm}
            value={"Registrarme"}
          />
          <button
            className={styles.ButtonForm}
            onClick={() => setTypeForm("login")}
            disabled={typeForm === "login"}
          >
            Ingresar
          </button>
          <Link href={"/"} className={styles.ButtonForm}>
            Continuar como invitado
          </Link>
        </div>
      </form>
    </motion.div>
  );

  return (
    <div className={styles.fullContainer}>
      <div className={styles.containerLogin}>
        <div className={styles.pictureContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className={styles.pictureContent}
          >
            <motion.img
              key={"/icons/logo.png"}
              src={"/icons/logo.png"}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { duration: 1 } }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
              className={styles.pictureLogo}
            />

            <h1 className={styles.title}>
              Al ingresar podrás tener acceso a super descuentos en los mejores
              vinos.
            </h1>
          </motion.div>
        </div>
        {typeForm === "login" ? <FormLogin /> : <FormRegister />}
      </div>
    </div>
  );
}
