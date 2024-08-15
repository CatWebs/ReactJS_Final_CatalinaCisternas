import React from 'react'
import logo from "../../assets/Arañitas2.png"
import './Logo.css'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={"/"} className='container-logo'>
        <div className='logo'>
            <img src={logo} alt="Logotipo de la tienda" />
        </div>
    </Link>
  )
}

export default Logo