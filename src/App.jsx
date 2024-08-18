import Header from './componets/Header/Header'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Footer from './componets/Footer/Footer'
import ErrorPage from './componets/ErrorPage'
import Cart from './componets/CartWidget/Cart'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from './componets/Context/Context'

function App() {



  return (
    <ContextProvider>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
              
            <Route exact path='/:idCategoria' element={<ItemListContainer />}/>

            <Route exact path='/detalle/:id' element={<ItemDetailContainer />}/>

            <Route path='*' element={<ErrorPage/>}/>

            <Route path='/cart' element={<Cart />}/>
                
          </Routes>
          <Footer/>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App