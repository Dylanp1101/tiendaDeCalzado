import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import "./checkout.css";
import { db } from "../../../firebaseDato";

export const Checkout = ({ onClose }) => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleInputChange = (evento) => {
    setUserInfo({ ...userInfo, [evento.target.name]: evento.target.value });
  };

  const handleFormSubmit = async (evento) => {
    evento.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/; 

    if (!emailRegex.test(userInfo.email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }

    if (!phoneRegex.test(userInfo.telefono)) {
      alert("Por favor, ingresa un teléfono válido.");
      return;
    }

    const order = {
      buyer: userInfo,
      items: cartItems,
      total: getCartTotal(),
    };

    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);
      alert(`¡Compra realizada con éxito! ID de la orden: ${docRef.id}`);

      clearCart();
      setUserInfo({ nombre: "", email: "", telefono: "" });

      onClose(); 
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    }
  };

  return (
    <div className="checkout-modal">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <button className="checkout-close" onClick={onClose}>✖</button>

        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="cart-summary">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imgUrl} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                </div>
              ))}
              <h3>Total a pagar: ${getCartTotal().toFixed(2)}</h3>
            </div>

            <form className="buyer-form" onSubmit={handleFormSubmit}>
              <h2>Datos del Comprador</h2>
              <input type="text" name="nombre" placeholder="Nombre" required value={userInfo.nombre} onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email" required value={userInfo.email} onChange={handleInputChange} />
              <input type="tel" name="telefono" placeholder="Teléfono" required value={userInfo.telefono} onChange={handleInputChange} />
              <button type="submit">Finalizar Compra</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

