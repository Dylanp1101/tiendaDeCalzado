import { Link } from "react-router-dom";
import {CartWidget} from "../../pages/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="https://res.cloudinary.com/dvb386cif/image/upload/v1740181090/graffiti_lettering_typography_art_illustration_hrkcru-removebg-preview_orjljk.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li><Link to="/category/Deportivos">Deportivos</Link></li>
            <li><Link to="/category/Casuales">Casuales</Link></li>
            <li><Link to="/category/Chancletas">Chancletas</Link></li>
          </ul>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
