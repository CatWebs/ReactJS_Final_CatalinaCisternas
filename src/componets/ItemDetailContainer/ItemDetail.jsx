import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { useState } from 'react'

import { useAppContext } from '../Context/Context';


const ItemDetail = ({nombre, precio, id, descripcion, imagen, stock}) =>{

    const { agregarAlCarrito } = useAppContext();
    const [contador, setContador] = useState(1)

    return (
        <div key={id} className="item-detail-card">
            <Link to="/">
                <button className="item-detail-volver">Volver</button>
            </Link>
            <div className='item-detail-flex'>
                <div className='container-detail-img'>
                    <img className="item-detail-card-img" src={imagen} alt={descripcion}/>
                </div>
                <div className="item-detail-card-body">
                    <h3 className="item-detail-card-title">{nombre}</h3>
                    <h4>${precio}</h4>
                    <div className="item-detail-descripcion-container">
                        <div className="item-detail-descripcion">
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-card-footer'>
                <ItemCount stock={stock} id={id} contador={contador} setContador={setContador}/>
                <button className="item-detail-button" onClick={()=> agregarAlCarrito(id,contador)}>Añadir al Carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail