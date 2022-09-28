import React from 'react'
import './body.css'
import photo from '../../assets/img/photo.svg'
import upload from '../../assets/img/upload.svg'
import user from '../../assets/img/user.svg'
import course from '../../assets/img/course.svg'
import tick from '../../assets/img/tick1.svg'
import logout from '../../assets/img/logout.svg'
import Options from '../sidebar/Options'

const Body = () => {
  return (
    <section className='Hero'>
        <section className='Hero_left'>
            <div className='Hero_left_img'>
                <div>
                    <img src={photo} alt='profile' className='Hero_user'></img>
                </div>
                <div className='Hero_icon'>
                    <img src={upload} alt='upload'></img>
                </div>
            </div>
            <h2>Grace Effiong</h2>

            <article>
                <Options icon={user} alt='user' text='Profile'/>
                <Options icon={course} alt='user' text='Courses'/>
                <Options icon={tick} alt='tick' text='Attendance'/>
            </article>

            <div className='Logout'>
                <img src={logout} alt='logout'></img>
                <p>Logout</p>
            </div>

        </section>
        <section className='Hero_right'></section>
    </section>
  )
}

export default Body
