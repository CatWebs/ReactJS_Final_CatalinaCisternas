import React from 'react';
import Item from '../Item/Item';



const ItemList = ({ productos }) => {

  return (
      <div className="itemList-container">
          {
              productos.map((el) => {
                  return (
                      <Item key={el.id} id={el.id} nombre={el.nombre} precio={el.precio} imagen={el.imagen} descripcion={el.descripcion} tipo={el.tipo} />
                  )
              })
          }
      </div>
  );
};
export default ItemList;