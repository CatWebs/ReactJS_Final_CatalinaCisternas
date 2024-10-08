import { useEffect } from 'react'
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppContext } from '../Context/Context';



const ItemListContainer = () => {

  const {cargarData, productos, items } = useAppContext();

  const categoria = useParams().idCategoria
 
  useEffect(()=>{
    cargarData(categoria);
  },[categoria]);

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


