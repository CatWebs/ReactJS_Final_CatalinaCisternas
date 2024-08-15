import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"


function ItemDetailContainer({productos}) {

	const { id } = useParams();
	const [productoSeleccionado, setProductoSeleccionado] = useState([]);

	useEffect(() => {
		const findProduct = productos.find(el => el.id === parseInt(id));
		setProductoSeleccionado(findProduct);
	},[])
    

	return (
        <>
		<div className="itemDetail-container">

            <ItemDetail key={productoSeleccionado.id} id={productoSeleccionado.id} nombre={productoSeleccionado.nombre} precio={productoSeleccionado.precio} imagen={productoSeleccionado.imagen} descripcion={productoSeleccionado.descripcion} tipo={productoSeleccionado.tipo} />
                       
        </div>
        </>
	)
}

export default ItemDetailContainer