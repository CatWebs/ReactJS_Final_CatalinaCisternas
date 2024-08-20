import Header from './componets/Header/Header'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Footer from './componets/Footer/Footer'
import ErrorPage from './componets/ErrorPage'
import Cart from './componets/CartWidget/Cart'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from './componets/Context/Context'
import Checkout from './componets/Checkout/Checkout'

function App() {

  return (
    
    <BrowserRouter>
      <ContextProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
              
            <Route exact path='/productos/:idCategoria' element={<ItemListContainer />}/>

            <Route exact path='/detalle/:id' element={<ItemDetailContainer />}/>

            <Route path='/cart' element={<Cart />}/>

            <Route path='/checkout' element={<Checkout />}/>

            <Route path='*' element={<ErrorPage/>}/>
                
          </Routes>
          <Footer/>
      </ContextProvider>
    </BrowserRouter>
    
  )
}

export default App