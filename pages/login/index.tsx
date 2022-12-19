import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/user/userReducer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const params = router.query;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitLogin = (data: any) => {
    const userLoginResponse = {
      name: "Juan",
      lastName: "Perez",
      usuario: data.usuario,
      lastLogin: Date(),
      correo: "Juan@Prueba.cl",
      token: "123456789",
    };

    dispatch(login(userLoginResponse));
    router.push("/");
  };

  const onSubmitRegister = (data: any) => {
    const userLoginResponse = {
      name: data.nombre,
      lastName: data.apellido,
      usuario: data.nombre + data.apellido,
      correo: data.correo,
      lastLogin: Date(),
      token: "123456789",
    };
    console.log(
      "🚀 ~ file: index.tsx:40 ~ onSubmitRegister ~ userLoginResponse",
      userLoginResponse
    );

    dispatch(login(userLoginResponse));
    router.push("/");
  };

  const [typeForm, setTypeForm] = useState(params.page ?? "login");
  const { user } = useSelector((state: any) => state);
  const dispatch = useDispatch();

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
        onSubmit={handleSubmit(onSubmitLogin)}
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
            type='password'
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
            className={`${styles.ButtonForm} ${styles.ButtonFormRegister2}`}
            onClick={() => setTypeForm("register")}
          >
            Registrarme
          </button>
          <Link
            href={"/"}
            className={`${styles.ButtonForm} ${styles.ButtonFormRegister2}`}
          >
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
        onSubmit={handleSubmit(onSubmitRegister)}
        style={{ textAlign: "center" }}
        className={styles.form}
      >
        <div className={styles.gridInputs} style={{ marginBottom: 15 }}>
          <div style={{ display: "flex" }}>
            <input
              {...register("nombre")}
              placeholder='nombre'
              className={styles.input}
              style={{ marginRight: 5 }}
            />
            <input
              {...register("apellido")}
              placeholder='apellido'
              className={styles.input}
              style={{ marginLeft: 5 }}
            />
          </div>
          <input
            {...register("correo", { required: true })}
            placeholder='Email'
            className={styles.input}
            type='email'
          />

          <input
            {...register("contrasena", { required: true })}
            placeholder='Constraseña'
            className={styles.input}
            type='password'
          />
          <input
            {...register("contrasena2", { required: true })}
            placeholder='Confirme constraseña'
            className={styles.input}
            type='password'
          />
        </div>

        <div className={styles.ButtonFormContainer}>
          <input
            type='submit'
            className={styles.ButtonForm}
            value={"Registrarme"}
          />
          <button
              className={`${styles.ButtonForm} ${styles.ButtonFormRegister2}`}
            onClick={() => setTypeForm("login")}
            disabled={typeForm === "login"}
          >
            Ingresar
          </button>
          <Link href={"/"}   className={`${styles.ButtonForm} ${styles.ButtonFormRegister2}`}>
            Continuar como invitado
          </Link>
        </div>
      </form>
    </motion.div>
  );

  return (
    <div className={styles.fullContainer}>
      <div className={styles.container_100}>
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
                initial={{ scale: 0.4 }}
                animate={{ scale: 0.6, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
                className={styles.pictureLogo}
              />

              <h1 className={styles.title}>
                Al ingresar podrás tener acceso a super descuentos en los
                mejores vinos.
              </h1>
            </motion.div>
          </div>
          {typeForm === "login" ? <FormLogin /> : <FormRegister />}
        </div>
      </div>
    </div>
  );
}
