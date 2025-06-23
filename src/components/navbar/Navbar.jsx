import { React, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
const Navbar = () => {
    const [menu,setMenu] = useState("false")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>SUH</p>
        </div>
        <ul className='nav-menu'>
            <li className='nav-item'onClick={()=>{setMenu("shop")}}>Shop {menu ==="shop"?<hr />:<></>}</li>
            <li className='nav-item'onClick={()=>{setMenu("mens")}}>Men {menu ==="mens"?<hr />:<></>}</li>
            <li className='nav-item'onClick={()=>{setMenu('womens')}}>Women{menu ==="womens"?<hr />:<></>}</li>
            <li className='nav-item'onClick={()=>{setMenu('kids')}}>Kids{menu ==="kids"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="cart" className='cart-icon' />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
