import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/userReducer";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Home() {
  const router = useRouter();
  const params = router.query;
  const [typeForm, setTypeForm] = useState(params.page ?? "login");
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [isChanging, setIsChanging] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const MySwal: any = withReactContent(Swal);

  const user = useSelector((state: any) => state);

  useEffect(() => {
    console.log("user", user);
    if (user != undefined && user.token !== "") {
      router.push("/");
    }
  });

  MySwal.bindClickHandler();

  useEffect(() => {
    if (isChanging) {
      setTimeout(() => {
        setIsChanging(false);
      }, 1000);
    }
  }, [isChanging]);

  useEffect(() => {
    if (error) {
      MySwal.mixin({
        icon: "error",
        title: "Error en datos ingresados",
        text: "Revisa la información ingresada",
        didClose: () => {
          setError(false);
        },
      }).fire(error);
    }
  }, [MySwal, error]);

  const onSubmitLogin = () => {
    const data = getValues();
    console.log(
      "🚀 ~ file: index.tsx:41 ~ onSubmitLogin ~ data",
      getValues(),
      typeForm,
      error
    );

    const userLoginResponse = {
      name: "Juan",
      lastName: "Perez",
      usuario: data.usuario,
      lastLogin: Date(),
      correo: "Juan@Prueba.cl",
      token: "123456789",
    };

    const test = data.usuario.trim() === "" || data.contrasena.trim() === "";
    if (test) {
      setError(true);
      console.log("error");
      return;
    } else {
      console.log("userLoginResponse", userLoginResponse);
      dispatch(login(userLoginResponse));
      router.push("/");
    }
  };

  const onSubmitRegister = () => {
    const data = getValues();
    const userLoginResponse = {
      name: data.nombre,
      lastName: data.apellido,
      usuario: data.nombre + data.apellido,
      correo: data.correo,
      lastLogin: Date(),
      token: "123456789",
    };

    const test =
      data.nombre.trim() === "" ||
      data.apellido.trim() === "" ||
      data.correo.trim() === "" ||
      data.contrasena2.trim() === "" ||
      data.contrasena.trim() !== data.contrasena2.trim();
    if (test) {
      setError(true);
      console.log("error");
      return;
    } else {
      console.log("userLoginResponse", userLoginResponse);
      dispatch(login(userLoginResponse));
      router.push("/");
    }
  };

  const FormLogin = () => (
    <AnimatePresence>
      <motion.div
        initial={
          isChanging
            ? {
                opacity: 0,
                transform: "rotateY(100deg)",
              }
            : {}
        }
        animate={{
          transform: "rotateY(0deg)",
          opacity: 1,
        }}
        transition={{ stiffness: 27, type: "spring" }}
        className={styles.formContainer}
      >
        <h1 className={styles.title}>
          Ingresa a la mejor tienda de vinos <br /> El Chamakito brrr
        </h1>
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
          // onSubmit={handleSubmit(onSubmitLogin)}
          style={{ textAlign: "center" }}
          className={styles.form}
        >
          <div className={styles.gridInputs}>
            {" "}
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register("usuario")}
              placeholder='Usuario'
              className={styles.input}
            />
            <input
              {...register("contrasena", { required: true })}
              placeholder='Contraseña'
              className={styles.input}
              type='password'
            />
            <p className={styles.recoverPass}>Olvide mi contraseña</p>
          </div>
          <div className={styles.ButtonFormContainer}>
            <button
              // type='submit'
              className={styles.ButtonForm}
              // value={"Ingresar"}
              onClick={(e) => {
                e.preventDefault();
                onSubmitLogin();
              }}
            >
              Ingresar
            </button>
            <button
              className={`${styles.ButtonForm} ${styles.ButtonFormRegister2}`}
              onClick={(e) => {
                e.preventDefault();
                setIsChanging(true);
                setTypeForm("register");
              }}
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
    </AnimatePresence>
  );

  const FormRegister = () => (
    <motion.div
      initial={
        isChanging
          ? {
              opacity: 0,
              transform: "rotateY(100deg)",
            }
          : {}
      }
      animate={{
        transform: "rotateY(0deg)",
        opacity: 1,
      }}
      transition={{ stiffness: 27, type: "spring" }}
      className={styles.formContainer}
    >
      <h1 className={styles.title}>
        Regístrate a la mejor tienda de vinos <br /> El Chamakito brrr
      </h1>
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
      <form style={{ textAlign: "center" }} className={styles.form}>
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
            placeholder='Contraseña'
            className={styles.input}
            type='password'
          />
          <input
            {...register("contrasena2", { required: true })}
            placeholder='Confirme contraseña'
            className={styles.input}
            type='password'
          />
        </div>

        <div className={styles.ButtonFormContainer}>
          <button
            className={styles.ButtonForm}
            onClick={(e) => {
              e.preventDefault();
              onSubmitRegister();
            }}
          >
            Registrarme
          </button>
          <button
            className={`${styles.ButtonForm} ${styles.ButtonFormRegister2}`}
            onClick={(e) => {
              e.preventDefault();
              setIsChanging(true);
              setTypeForm("login");
            }}
          >
            Ingresar
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
