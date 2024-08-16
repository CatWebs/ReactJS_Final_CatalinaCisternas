import carritoImg from "../../assets/shopping-cart_3394009.png"
import "./CartWidget.css";
import { useAppContext } from "../Context/Context";

function CartWidget() {

  const {carrito} = useAppContext();
  return (
    <>
      <div className="carrito" onClick={()=>console.log("aqui esta el carrito",carrito)}>
          <img src={carritoImg} className="img-carrito"/>
          <span className="carrito-cantidad">{carrito.length}</span>
      </div>
    </>
  )
}

export default CartWidget