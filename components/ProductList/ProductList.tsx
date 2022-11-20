export default function ProductList() {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 1000,
      descripcion: "Descripcion del producto 1",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 2000,
      descripcion: "Descripcion del producto 2",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 3000,
      descripcion: "Descripcion del producto 3",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: 4000,
      descripcion: "Descripcion del producto 4",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
    {
      id: 5,
      nombre: "Producto 5",
      precio: 5000,
      descripcion: "Descripcion del producto 5",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
    {
      id: 6,
      nombre: "Producto 6",
      precio: 6000,
      descripcion: "Descripcion del producto 6",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
    {
      id: 7,
      nombre: "Producto 7",
      precio: 7000,
      descripcion: "Descripcion del producto 7",
      imagen:
        "https://www.elmuneco.cl/wp-content/uploads/2019/05/el-muñeco-distribuidora-logo.png",
    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "33.3% 33.3% 33.3%" }}>
      {productos.map((producto) => (
        <div key={producto.id} style={{padding:10,margin:10,boxShadow: "0px 0px 10px 0px rgba(33, 12, 51, 1)",}}>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
      ))}
    </div>
  );
}
