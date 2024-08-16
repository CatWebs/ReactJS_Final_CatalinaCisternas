import { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppContext } from '../Context/Context';



const ItemListContainer = () => {

  const {cargarData, productos} = useAppContext();
 
  useEffect(()=>{
    cargarData();
  });

  const {idCategoria} = useParams()

  const [items, setItems] = useState([]);
  const filtro = productos.filter(el => el.tipo === idCategoria)

  useEffect(() =>{
    filtro.length > 0 ? setItems(filtro) : setItems(productos)
  });
  
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
                          <ItemList productos={items}/>
                        </div>
                      </>
              }
          </>
      );
};

export default ItemListContainer;


