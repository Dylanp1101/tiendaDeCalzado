import { CartWidget } from "../../pages/itemListContainer/cartWidget/CartWidget";
import './navbar.css';
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          CalzadoShop
        </div>
        <div className="navbar-links">
          <ul>
            <li>Deportivos</li>
            <li>Casuales</li>
            <li>Chancletas</li>
           
          </ul>
        </div>
        <div className="cart-widget">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};