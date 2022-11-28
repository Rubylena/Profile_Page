import React from 'react'
import './header.css'
import logo from '../../assets/img/logo.svg'
import photo from '../../assets/img/photo-min.jpg'
import { Link } from 'react-router-dom'

const ClassroomHeader = () => {
  return (
    <header className='header'>
        <nav>
            <img src={logo} alt='logo' className='header_img' ></img>
        </nav>
        <p className='header_p1'>Classroom Profile</p>
          <Link to='/interests' className='link_profile'>
            <p className='header_p2'>Grace Effiong</p>
            <div className='header_img_container'>
              <img className='header_img2' src={photo} alt='profile'></img>
            </div>
          </Link>
    </header>
  )
}

export default ClassroomHeader