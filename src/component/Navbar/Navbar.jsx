import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Ecommerce_Assets/logo.png'
import cart_icon from '../Assets/Ecommerce_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
 const Navbar = () => {

    const [menu,setMenu] = useState("shop")


  return (
    <>
    <div className='navbar'>
      
       <div className="navbar">
        <img src={logo} alt="" />
        <p>MEM-SHOPPER</p>
       </div>

       <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop{menu==="shop"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/'>Men{menu==="mens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/'>Women{menu==="womens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/'>Kids{menu==="kids"?<hr/>:<></>}</Link></li>
       </ul>

       <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>0</div>
       </div>
     </div>
    </>
  )
}

export default Navbar
