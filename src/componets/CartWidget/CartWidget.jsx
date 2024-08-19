import carritoImg from "../../assets/shopping-cart_3394009.png"
import "./CartWidget.css";
import { useAppContext } from "../Context/Context";

function CartWidget() {

  const {cantidadTotalCarrito} = useAppContext();
  return (
    <>
      <div className="carrito">
          <img src={carritoImg} className="img-carrito"/>
          <span className="carrito-cantidad">{cantidadTotalCarrito}</span>
      </div>
    </>
  )
}

export default CartWidget