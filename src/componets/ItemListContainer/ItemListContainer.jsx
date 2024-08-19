import { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppContext } from '../Context/Context';



const ItemListContainer = () => {

  const {cargarData, productos } = useAppContext();

  const categoria = useParams().idCategoria
 
  const [items,setItems] = useState([])

  useEffect(()=>{
    cargarData();
      if(categoria){
        setItems(productos.filter((el) => el.tipo === categoria))
      }else{
        setItems(productos)
      }
  },[categoria]);

  console.log(items)

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


