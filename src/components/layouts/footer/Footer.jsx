import { Link } from "react-router-dom"
import "./Footer.css"
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos tu tienda de confianza para todo tipo de calzado. Ofrecemos
            calidad, comodidad y estilo en cada paso.
          </p>
        </div>

        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@tuzapateria.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Principal 123, Ciudad</p>
        </div>

        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
          <FaFacebookSquare />
            <IoLogoInstagram />
            <BsTwitterX />
          </div>
        </div>
      </div>

   
      <div className="footer-bottom">
        <p>© 2025 Tu Zapatería. Todos los derechos reservados. Dylan Pires</p>
      </div>
    </footer>
  );
};


