import React from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-grey-300'>
      <div>
        <img src={Logo} alt="Logo image"/>
      </div>
      
    </div>
  )
}

export default NavBar