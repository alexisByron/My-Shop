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
              width: 340,
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "#f1ebea",
              borderRadius: 30,
              border: "none",
              color:'black'
            }}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired2", { required: true })}
            placeholder='Empresa'
            style={{
              width: 340,
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "#f1ebea",
              borderRadius: 30,
              border: "none",
              color:'black'
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
              width: 340,
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "#f1ebea",
              borderRadius: 30,
              border: "none",
              color:'black'
            }}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired2", { required: true })}
            placeholder='Correo Electronico'
            style={{
              width: 340,
              height: 50,
              padding: 10,
              marginRight: 10,
              background: "#f1ebea",
              borderRadius: 30,
              border: "none",
              color:'black'
            }}
          />
          {/* errors will return when field validation fails  */}
        </div>

        <div style={{ justifySelf: "center", marginTop: 5 }}>
          {/* include validation with required or other standard HTML validation rules */}
          <textarea
            {...register("exampleRequired3", { required: true })}
            placeholder='Escribe cualquier duda que tengas, estamos para ayudarte..........'
            style={{
              width: 700,
              height: 200,
              padding: 10,
              background: "#f1ebea",
              borderRadius: 30,
              border: "none",
              color:'black'
            }}
          />
        </div>

        <input
          type='submit'
          style={{
            padding: 10,
            margin: "auto",
            marginTop: 20,
            background: "#f1ebea",
            color: "black",
            border: "none",
            boxShadow: "3px 6px 6px 3px rgb(0 0 0 / 60%)",
            borderRadius: 30,
            width: 400,
            height:50
          }}
        />
      </form>
    </div>
  );
}
