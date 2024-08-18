import { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppContext } from '../Context/Context';



const ItemListContainer = () => {

  const {cargarData, productos, setProductos} = useAppContext();
  //const {idCategoria} = useParams()
  useEffect(()=>{
    cargarData();
  });

  

  /*
  const filtro = productos.filter(el => el.tipo === idCategoria)

  useEffect(() =>{
    filtro.length > 0 ? setProductos(filtro) : console.log("no hacer nada");
  });
  console.log(productos);
  console.log(filtro)*/
  
  return (
          <>
              {
                  ((productos.length) === 0) ?
                      <Loader />
                    :
                      <>
                        <div className='main-store-container'>
                          <h1>Hilados Arañitas</h1>    
                          <h2>Bienvenido a la comunidad de 'Arañitas Tejedoras'</h2>
                          <ItemList productos={productos}/>
                        </div>
                      </>
              }
          </>
      );
};

export default ItemListContainer;


