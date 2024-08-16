import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className="container-pelotas">
        <div className="cargando">
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <span className="texto-cargando">Cargando...</span>
        </div>
    </div>
  )
}

export default Loader