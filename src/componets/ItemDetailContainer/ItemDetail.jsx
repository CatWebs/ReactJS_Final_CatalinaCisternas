import React from 'react'

const ItemDetail = ({nombre, precio, id, descripcion, imagen}) =>{

    return (
        <div key={id} className="item-detail-card">
            <div className='item-detail-flex'>
                <div className='container-detail-img'>
                    <img className="item-detail-card-img" src={imagen} alt={descripcion}/>
                </div>
                <div className="item-detail-card-body">
                    <h3 className="item-detail-card-title">{nombre}</h3>
                    <h4>{precio}</h4>
                    <div className="item-detail-descripcion-container">
                        <div className="item-detail-descripcion">
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="item-detail-button">Agregar</button>
        </div>
    );
};

export default ItemDetail