import React from 'react'
import './header.css'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <nav>
            <img src={logo} alt='logo' className='header_img' ></img>
        </nav>
        <p className='header_p1'>Classroom Profile</p>
          <Link to='/classroom' ><p className='header_p2'>Go to Classroom &nbsp; &#8250;</p></Link>
    </header>
  )
}

export default Header