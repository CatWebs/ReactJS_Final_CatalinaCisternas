import React from 'react'
//import { useState } from 'react'


const ItemCount = ({stock, id, contador, setContador}) => {
  console.log(id)
    
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)

      console.log(id);
  
    return (
      <>
        <div className='container-contador'>
          <div className='botones-accion'>
            <button className="boton-accion" onClick={restar} disabled={contador < 2}>-</button>
            <h3>{contador}</h3>
            <button className="boton-accion" onClick={sumar} disabled={contador === stock}>+</button>
          </div>
          {contador === stock && <h4 className="sin-stock"> No hay más productos en stock</h4>}
        </div>
      </>
    )
}

export default ItemCount