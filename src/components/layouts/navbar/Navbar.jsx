import { Link } from "react-router-dom"
import './Navbar.css';
import { CartWidget } from '../../pages/cartWidget/CartWidget';
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <Link to="/"><img src="https://res.cloudinary.com/dvb386cif/image/upload/v1740181090/graffiti_lettering_typography_art_illustration_hrkcru-removebg-preview_orjljk.png" alt="logo de la marca" /></Link> 
        </div>
        <div className="navbar-links">
          <ul>
            <li>Deportivos</li>
            <li>Casuales</li>
            <li>Chancletas</li>
           
          </ul>
        </div>
        <div>
          <CartWidget/>
        </div>
      </div>
    </nav>
  );
};