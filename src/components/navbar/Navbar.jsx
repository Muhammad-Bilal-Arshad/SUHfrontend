import { React, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu] = useState("false")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>SUH</p>
        </div>
        <ul className='nav-menu'>
            <li className='nav-item'onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration: 'none'}}>Shop</Link> {menu ==="shop"?<hr />:<></>}</li>
            <li className='nav-item'onClick={()=>{setMenu("mens")}}><Link to="/mens" style={{textDecoration: 'none'}}>Men</Link> {menu ==="mens"?<hr />:<></>}</li>
            <li className='nav-item'onClick={()=>{setMenu('womens')}}><Link to="/womens" style={{textDecoration: 'none'}}>Women</Link> {menu ==="womens"?<hr />:<></>}</li>
            <li className='nav-item'onClick={()=>{setMenu('kids')}}><Link to="/kids" style={{textDecoration: 'none'}}>Kids</Link> {menu ==="kids"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="cart" className='cart-icon' /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
