import React from 'react'
import "./Navbar.scss"
import Logo from "../../img/sublime_logo.png";

export default function Navbar() {
  return (
    <>
    <div className='Navbar' >
        <div className='company-logo'>
            <img src={Logo} alt="Logo" width={190} height={110}  className='company-logo'/>
            <div className='menu'>
            Menu
        </div>
        </div>
       
    </div>
    </>
  )
}
