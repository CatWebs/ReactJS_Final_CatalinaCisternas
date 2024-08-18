import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({nombre, precio, id, descripcion, imagen, stock}) =>{
    console.log(id)
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
                <ItemCount stock={stock} id={id}/> 
            </div>
        </div>
    );
};

export default ItemDetail