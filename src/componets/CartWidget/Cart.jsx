import React from 'react'
import { useAppContext } from "../Context/Context";
import { useState } from 'react'
import "./Cart.css"

const Cart = () => {
  const { carrito/*, crearOrden,  quitarDelCarrito, vaciarCarrito*/ } = useAppContext();
    
    /*const handleCarrito = () =>{
      crearOrden();
    }*/
   console.log(carrito)

   const [productoCantidad, setProductoCantidad] = useState(1)
    const agregar = () => setProductoCantidad(productoCantidad + 1)
    const quitar = () => setProductoCantidad(productoCantidad - 1)


  return (
    <div className='container-carrito'>
      {
        ((carrito.length) === 0) ?
        <>
          <h2 className="titulo-carrito-vacio">Tu carrito está vacío</h2>
        </>
        :
        carrito.map((el)=> {
          return (
            <>
              <div className='producto-carrito-header'>
                <h2>Producto</h2>
                <h2>Nombre</h2>
                <h2>Precio</h2>
                <h2>cantidad</h2>
              </div>
              <div className='producto-carrito' key={el.id}>
                <img src={el.imagen}/>
                <h4>{el.nombre}</h4>
                <button className="boton-accion" onClick={quitar} disabled={productoCantidad < 2}>-</button>
                <h3>{productoCantidad}</h3>
                <button className="boton-accion" onClick={agregar} disabled={productoCantidad === 10 /*stock*/}>+</button>
                <button className='boton-accion eliminar-producto-boton' /*onClick={()=> quitarDelCarrito()}*/>Eliminar Producto</button>
                <h4>${el.precio}</h4>
              </div>
            </>
          )
        })
      }
        <h4 className="total-compra">Total de la compra : 0</h4>
        <button className="fin-compra" /*onClick={()=> handleCarrito()}*/>Finalizar Compra</button>
        <button className="fin-compra" /*onClick={()=> vaciarCarrito()}*/>Vaciar Carrito</button>
    </div>
  )
}

export default Cart