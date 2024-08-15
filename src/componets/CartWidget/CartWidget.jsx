import carrito from "../../assets/shopping-cart_3394009.png"
import "./CartWidget.css"
import { Link } from "react-router-dom"

function CartWidget() {
  return (
    <>
      <Link to={"/"} className="carrito">
          <img src={carrito} className="img-carrito"/>
          <span className="carrito-cantidad">0</span>
      </Link>
    </>
  )
}

export default CartWidget