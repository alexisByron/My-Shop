import React from "react";
import Select from "react-select";
import styles from "./FiltersProductList.module.css";

export default function FiltersProductList() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        marginBottom: 30,
        marginTop: 10,
      }}
      className={styles.test}
    >
      <div style={{ minWidth: 250 }}>
        <Select options={options} placeholder='Categoria' />
      </div>

      <input
        type='text'
        placeholder='Buscar Producto'
        style={{
          minWidth: 450,
          width: 240,
          padding: 10,
          marginRight: 10,
          background: "rgba(66, 24, 102, 1)",
        }}
      />

      <div style={{ minWidth: 350, maxWidth: 350 }}>
        <Select
          defaultValue={[options[2], options[3]]}
          isMulti
          name='colors'
          options={options}
          className='basic-multi-select'
          classNamePrefix='select'
          placeholder='Comercios'
        />
      </div>
    </div>
  );
}
