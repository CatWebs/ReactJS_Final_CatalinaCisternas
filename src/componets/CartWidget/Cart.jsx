import React from 'react'
import {Link }from 'react-router-dom'
import { useAppContext } from "../Context/Context";
import { useState } from 'react'
import "./Cart.css"

const Cart = () => {
  const { carrito,  quitarDelCarrito, vaciarCarrito, total } = useAppContext();
  
  return (
    <div className='container-carrito'>
      {
        ((carrito.length) !== 0) ?
          carrito.map((el)=> {
            return (
              <div className='producto-carrito' key={el.id}>
                <img src={el.imagen}/>
                <h4>{el.nombre}</h4>
                {/*<button className="boton-accion" /*onClick={quitar}*/ /*disabled={el.cantidad < 2}>-</button>*/}
                <h3>{el.cantidad}</h3>
                {/*<button className="boton-accion" /*onClick={agregar}*/ /*disabled={el.cantidad === el.stock}>+</button>*/}
                <button className='boton-accion eliminar-producto-boton' onClick={() => quitarDelCarrito(el.id, el.precio, el.cantidad)}>Eliminar Producto</button>
                <h4>${el.precio}</h4>
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
          <Link to="/checkout">
            <button className="fin-compra" hidden={carrito.length === 0}>
              Finalizar Compra
            </button>
          </Link>
          <button className="fin-compra" onClick={() => vaciarCarrito()} hidden={carrito.length === 0}>Vaciar Carrito</button>
        </div>    
      </div>
    )
  }
  
export default Cart