import React from 'react'
import { useAppContext } from "../Context/Context";

const Cart = () => {
  const { carrito/*, crearOrden,  quitarDelCarrito, vaciarCarrito*/ } = useAppContext();
    
    /*const handleCarrito = () =>{
      crearOrden();
    }*/
   console.log(carrito)
  return (
    <div className='container-carrito'>
        <div className='productos-carrito'>
            <p>aquí iran los productos</p> 
        </div>
        <button /*onClick={()=> handleCarrito()}*/>Finalizar Compra</button>
    </div>
  )
}

export default Cart