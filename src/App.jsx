import Header from './componets/Header/Header'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Footer from './componets/Footer/Footer'
import ErrorPage from './componets/ErrorPage'

import fetchData from "./fetchData"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect , useState } from 'react'

function App() {

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetchData()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));
    }, []);



  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<ItemListContainer productos={productos} />}/>
          
        <Route exact path='/productos/:idCategoria' element={<ItemListContainer productos={productos} />}/>

        <Route exact path='/detalle/:id' element={<ItemDetailContainer productos={productos}  />}/>

        <Route path='*' element={<ErrorPage/>}/>
            
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
