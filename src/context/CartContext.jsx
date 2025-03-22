import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color && 
          item.size === product.size   
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.color === product.color && item.size === product.size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  // Función para obtener el total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Función para obtener el número total de productos en el carrito
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]); // Limpiar todos los elementos del carrito
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        clearCart, // Pasamos la función clearCart al contexto
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
