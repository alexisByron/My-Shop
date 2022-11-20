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
    <div>
      <h3 style={{ textAlign: "center", color: "rgba(33, 12, 51, 1)" }}>
        Contacto
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid" }}
        className={styles.form}
      >
        <div style={{ justifySelf: "center", marginTop: 5 }}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("example2")}
            placeholder='Nombre'
            style={{
              width: 240,
              padding: 10,
              marginRight: 10,
              background: "rgba(66, 24, 102, 1)",
            }}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired2", { required: true })}
            placeholder='Empresa'
            style={{
              width: 240,
              padding: 10,
              marginLeft: 10,
              background: "rgba(66, 24, 102, 1)",
            }}
          />
          {/* errors will return when field validation fails  */}
        </div>
        <div style={{ justifySelf: "center", marginTop: 5 }}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("example2")}
            placeholder='Telefono'
            style={{
              width: 240,
              padding: 10,
              marginRight: 10,
              background: "rgba(66, 24, 102, 1)",
            }}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired2", { required: true })}
            placeholder='Correo Electronico'
            style={{
              width: 240,
              padding: 10,
              marginLeft: 10,
              background: "rgba(66, 24, 102, 1)",
            }}
          />
          {/* errors will return when field validation fails  */}
        </div>

        <div style={{ justifySelf: "center", marginTop: 5, maxWidth: 500 }}>
          {/* include validation with required or other standard HTML validation rules */}
          <textarea
            {...register("exampleRequired3", { required: true })}
            placeholder='Escribe cualquier duda que tengas, estamos para ayudarte..........'
            style={{
              padding: 10,
              height: 100,
              maxHeight: 350,
              minHeight: 100,
              width: 500,
              maxWidth: 500,
              minWidth: 250,
              background: "rgba(66, 24, 102, 1)",
            }}
          />
        </div>

        <input
          type='submit'
          style={{
            width: 250,
            padding: 10,
            margin: "auto",
            marginTop: 20,
            background: "rgba(66, 24, 102, 1)",
            color:'rgba(237, 216, 255, 1)'
          }}
        />
      </form>
    </div>
  );
}
