import Image from "next/image";
export default function ProductList() {
  
  const productos = [
    {
      id: 1,
      nombre: "ATUN VAN CAMPS EN AGUA 160 GRS.",
      precio: '$1.235 por unidad',
      descripcion: "Formato: 1 x 1 unit",
      imagen:
        "https://res.cloudinary.com/yom/image/upload/h_200/v1587054190/blloozitpex6lbfkq9wr.jpg",
    },
    {
      id: 2,
      nombre: "CROCANTE DE POLLO 100 GRS",
      precio: '$19.399 por unidad',
      descripcion: "Formato: 1 x 1 unit",
      imagen:
        "https://res.cloudinary.com/yom/image/upload/h_200/v1587052262/iccl9pu3zghbrfxqlcoi.png",
    },
    {
      id: 3,
      nombre: "PINA EN RODAJAS ESMERALDA 567 GRS. - I.C.B.",
      precio: '$1.214 por unidad',
      descripcion: "Formato: 1 x 1 unit",
      imagen:
        "https://res.cloudinary.com/yom/image/upload/h_200/v1503327115/dwql9cgs4iqhw16vcgjm.jpg",
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
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "33.3% 33.3% 33.3%" }}>
      {productos.map((producto) => (
        <div
          key={producto.id}
          style={{
            padding: 10,
            margin: 10,
            boxShadow: "0px 0px 10px 0px rgba(33, 12, 51, 1)",
            backgroundColor: "rgba(219, 177, 255, 1)",
            borderRadius: 10,
          }}
        >
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            height={130}
            style={{ objectFit:'contain' }}
          />
          <h3 style={{ color: "rgba(33, 12, 51, 1)" }}>{producto.nombre}</h3>
          <p style={{ color: "rgba(33, 12, 51, 1)" }}>{producto.descripcion}</p>
          <p style={{ color: "rgba(33, 12, 51, 1)" }}>{producto.precio}</p>
          <div style={{width:'100%', textAlign:'center'}}>
          <button style={{ backgroundColor: "rgba(33, 12, 51, 1)", height:50, width:200 }}>
            Agregar a carrito
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
