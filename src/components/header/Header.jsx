import React from 'react'
import './header.css'
import logo from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <header className='header'>
        <nav>
            <img src={logo} alt='logo' className='header_img' ></img>
        </nav>
        <p className='header_p1'>Classroom Profile</p>
        <p className='header_p2'>Go to Classroom &nbsp; &#8250;</p>
    </header>
  )
}

export default Header