import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { db, getDoc, doc } from "../../../firebaseDato"; 
import "./ProductDetail.css";

export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) {
          console.error("ID de producto no válido");
          return;
        }

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() }); 
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error obteniendo el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleAddToCart = () => {
    if (!product.id) {
      alert("Este producto no tiene un ID válido.");
      return;
    }

    addToCart(product, quantity);
    alert(`${quantity} ${product.title} agregado(s) al carrito`);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imgUrl || "https://via.placeholder.com/400"} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="stock">Stock disponible: {product.stock}</p>
        <div className="quantity-selector">
          <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="quantity-button">-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))} className="quantity-button">+</button>
        </div>
        <div className="buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
          <Link to="/" className="back-link">Volver</Link>
        </div>
      </div>
    </div>
  );
};
