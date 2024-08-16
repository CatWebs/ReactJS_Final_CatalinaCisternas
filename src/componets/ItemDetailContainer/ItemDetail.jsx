import React from 'react'
import { useAppContext } from '../Context/Context';

const ItemDetail = ({nombre, precio, id, descripcion, imagen}) =>{
    const { agregarAlCarrito } = useAppContext();
    return (
        <div key={id} className="item-detail-card">
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
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
            <button className="item-detail-button" onClick={()=> agregarAlCarrito(id)}>Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetail