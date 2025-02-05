import { RiShoppingCart2Line } from "react-icons/ri";
import './cartwidget.css'; 

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <RiShoppingCart2Line />
      <h3>3</h3>
    </div>
  );
};