import { useState } from "react";
import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container-card">
      <img style={{ width: "100px" }} src={item.imageUrl} alt={item.title} />
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
      <button onClick={() => addToCart(item)}>Agregar al carrito</button>
      <Link to={`/itemDetail/${item.id}`}>Ver detalle</Link>
    </div>
  );
};