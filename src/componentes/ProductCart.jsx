import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ProductsCart = () => {
  const { carrito, QuantityLiquorsInCarrito, deleteLiquorInCarrito } = useContext(GlobalContext);

  const printButtons = (cantidad, productId) => {
    if (cantidad === 1) {
      return (
        <>
          <button
            onClick={() =>
                deleteLiquorInCarrito(productId)
            }
            class="btn btn-danger btn-sm"
            style={{ marginRight: 10 }}
          >
            <img
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"width="25" height="25"  alt="delete"/>
          </button>
          {cantidad}
          <button
            onClick={() =>
              QuantityLiquorsInCarrito(productId, "incrementar")
            }
            class="btn btn-primary btn-sm"
            style={{ marginLeft: 10 }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/plus.png"
              alt="mas"
              width="25"
              height="25"
            />
          </button>
        </>
      );

    } else {
      return (
        <>
          <button
            onClick={() =>
              QuantityLiquorsInCarrito(productId, "decrementar")
            }
            class="btn btn-danger btn-sm"
            style={{ marginRight: 10 }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/minus.png"
              alt="menos"
              width="25"
              height="25"
            />
          </button>
          {cantidad}
          <button
            onClick={() =>
              QuantityLiquorsInCarrito(productId, "incrementar")
            }
            class="btn btn-primary btn-sm"
            style={{ marginLeft: 10 }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/plus.png"
              alt="mas"
              width="25"
              height="25"
            />
          </button>
        </>
      );
    }
  };

  return (
    <div className="col-md-8" >
    <table class="table table-sm text-center">
      <thead>
        <tr>
          <th style={{ fontSize: "1.1rem" }} scope="col" colSpan="2">
            Liquor
          </th>
          <th style={{ fontSize: "1.1rem" }} scope="col">
            Price
          </th>
          <th style={{ fontSize: "1.1rem" }} scope="col">
            Quantity
          </th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((p) => (
          <tr>
            <td style={{ maxWidth: 100, paddingTop: "1.3rem" }}>
              <p style={{maxWidth: "100%",overflow: "hidden",textOverflow: "ellipsis",}}>
                {p.nombre}
              </p>
            </td>
            <td>
              <img
                src={
                  p.imagen ||
                  "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912731_sumario_normal.jpg"
                }  height="100%" width="40" alt="img"
              />
            </td>
            <td style={{ fontSize: "1.3rem", paddingTop: "1.3rem" }}>
              $ {p.precio}{" "}
            </td>
            <td style={{ fontSize: "1.3rem" }}>
              {printButtons(p.quantity, p.id)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
export default ProductsCart;