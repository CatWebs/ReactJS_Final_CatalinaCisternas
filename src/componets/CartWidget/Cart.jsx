import React from 'react'
import {Link }from 'react-router-dom'
import { useAppContext } from "../Context/Context";
import "./Cart.css"

const Cart = () => {
  const { carrito,  quitarDelCarrito, vaciarCarrito, total } = useAppContext();
  
  return (
    <div className='container-carrito'>
      <h1>Bienvenido a tu carrito de compras</h1>
      {
        ((carrito.length) !== 0) ?
          carrito.map((el)=> {
            return (
              <div className='producto-carrito' key={el.id}>
                <img src={el.imagen}/>
                <h4>Producto: {el.nombre}</h4>
                <h4>Cantidad: {el.cantidad}</h4>
                <button className='boton-accion eliminar-producto-boton' onClick={() => quitarDelCarrito(el.id, el.precio, el.cantidad)}>Eliminar Producto</button>
                <h4>Precio: ${el.precio}</h4>
                <h4>Total Item: ${el.cantidad*el.precio}</h4>
              </div>
            )
          })
          :
          <>
            <h2 className="titulo-carrito-vacio">Tu carrito está vacío</h2>
            <Link to={"/"}>
              <button className="fin-compra">Volver</button>
            </Link>
          </>
        }   
        <h4 className="total-compra" hidden={carrito.length === 0}>Total de la compra : ${total}</h4>
        <div className='cart-footer'>
          <Link to="/checkout" className="fin-compra" hidden={carrito.length === 0}>
              Finalizar Compra
          </Link>
          <button className="fin-compra" onClick={() => vaciarCarrito()} hidden={carrito.length === 0}>Vaciar Carrito</button>
        </div>   
        <div className='banner'></div> 
      </div>
    )
  }
  
export default Cart