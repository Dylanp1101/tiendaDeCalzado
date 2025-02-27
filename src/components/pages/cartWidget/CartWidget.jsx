

import { useState } from "react"
import { useCart } from "../../../context/CartContext"
import "./CartWidget.css"

export const CartWidget = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart()

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="cart-widget">
      <button className="cart-button" onClick={toggleCart}>
        <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-4h8a2 2 0 0 0 1.95-1.57L21 6H6.5l-.5-2H3" />
        </svg>
        {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
      </button>

      {isCartOpen && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="empty-cart">El carrito está vacío</p>
          ) : (
            <div className="cart-content">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="quantity-button">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="quantity-button">
                      +
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="remove-button">
                      ×
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <p>Total: ${getCartTotal().toFixed(2)}</p>
                <button className="checkout-button">Ir al checkout</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

