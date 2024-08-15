import CartWidget from "../CartWidget/CartWidget";
import {Link, Outlet} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <ul className="navbar-links">
            <Link to={"/"} className="navbar-item">
                Inicio
            </Link>
            <Link to={"/productos/algodon"} className="navbar-item">
                Algodón
            </Link>
            <Link to={"/productos/acrilico"} className="navbar-item">
                Acrílico
            </Link>
        </ul>
        <CartWidget />
    </nav>
    <Outlet/>
    </>
    
  )
}

export default Navbar
