import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/Context';


const Item = ({nombre, precio, id, descripcion, imagen}) =>{

    const { agregarAlCarrito } = useAppContext();
    return (
        <div className="item-card">
            <div className='container-img'>
                <img className="item-card-img" src={imagen} alt={descripcion}/>
            </div>
            <div className="item-card-body">
                <h3 className="item-card-title">{nombre}</h3>
                <h4>${precio}</h4>
                <Link className="item-button" to={`/detalle/${id}`}>
                    <button className="item-button">Ver más</button>
                </Link>
            </div>
            <div className='item-card-footer'>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
            <button className="item-button" onClick={()=> agregarAlCarrito(id)}>Añadir al Carrito</button>
        </div>
    );
};



export default Item;

