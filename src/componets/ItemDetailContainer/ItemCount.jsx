import React from 'react'

const ItemCount = ({ contador, setContador}) => {
    
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
  
    return (
      <>
        <div className='container-contador'>
          <div className='botones-accion'>
            <button className="boton-accion" onClick={restar} disabled={contador < 2}>-</button>
            <h3>{contador}</h3>
            <button className="boton-accion" onClick={sumar} disabled={contador === 100}>+</button>
          </div>
        </div>
      </>
    )
}

export default ItemCount