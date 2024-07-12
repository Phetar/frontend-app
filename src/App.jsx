
import './App.css'
import  Navbar  from './component/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import LoginSignup from './pages/loginsignup'
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
//import { useState } from 'react'
 //5k (gzipped: 2.2k)
 
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="./product" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
      </Routes>

      
    </div>
  )
}

export default App
