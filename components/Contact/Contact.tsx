import styles from "./Contact.module.css";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.containerForm}>
      <h1 style={{ textAlign: "center", color: "rgb(81, 64, 21)" }}>Contacto</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center", maxWidth: 700 }}
        className={styles.form}
      >
        <div className={styles.rowContactField}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("example2")}
            placeholder='Nombre'
            style={{
              width: "100%",
              // maxWidth: 340,
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "rgb(81, 64, 21)",
              borderRadius: 30,
              border: "none",
              color: "rgba(243, 220, 174)",
              marginBottom: 5,
            }}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired2", { required: true })}
            placeholder='Empresa'
            style={{
              width: "100%",
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "rgb(81, 64, 21)",
              borderRadius: 30,
              border: "none",
              color: "rgba(243, 220, 174)",
              marginBottom: 5,
            }}
          />
          {/* errors will return when field validation fails  */}
        </div>

        <div className={styles.rowContactField}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("example2")}
            placeholder='Telefono'
            style={{
              width: "100%",
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "rgb(81, 64, 21)",
              borderRadius: 30,
              border: "none",
              color: "rgba(243, 220, 174)",
              marginBottom: 5,
            }}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired2", { required: true })}
            placeholder='Correo Electronico'
            style={{
              width: "100%",
              // maxWidth: 340,
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "rgb(81, 64, 21)",
              borderRadius: 30,
              border: "none",
              color: "rgba(243, 220, 174)",
              marginBottom: 5,
            }}
          />
          {/* errors will return when field validation fails  */}
        </div>

        <div style={{ justifySelf: "center", marginTop: 5 }}>
          <textarea
            {...register("exampleRequired3", { required: true })}
            placeholder='Escribe cualquier duda que tengas, estamos para ayudarte..........'
            style={{
              width: "100%",
              maxWidth: 700,
              height: 200,
              padding: 10,
              background: "rgb(81, 64, 21)",
              borderRadius: 30,
              border: "none",
              color: "rgba(243, 220, 174)",
            }}
          />
        </div>

        <input
          type='submit'
          style={{
            padding: 10,
            margin: "auto",
            marginTop: 20,
            background: "rgb(81, 64, 21)",
            color: "rgba(243, 220, 174)",
            border: "none",
            boxShadow: "1px 1px 5px 1px rgba(81, 64, 21)",
            borderRadius: 30,
            maxWidth: 400,
            width:'100%',
            height: 50,
          }}
        />
      </form>
    </div>
  );
}
