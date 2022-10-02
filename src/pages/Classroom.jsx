import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import play from '../assets/img/play.svg'
import students from '../assets/img/students.svg'
import topics from '../assets/img/topics.svg'
import chat from '../assets/img/chat.svg'
import note from '../assets/img/note.svg'
import video from '../assets/img/video.svg'
import lab from '../assets/img/lab.svg'
import './classroom.css'
import Buttons from '../components/buttons/Buttons'


const Classroom = () => {
    const[topic, setTopic] =useState(false)

    const lists =[
        'Python as a Computer Programming Language',
        'Datatypes and General Programming Concepts',
        'Mathematical Functions, Strings and Objects',
        'For Loops, While Loops, and Nested Loops',
        'Basic Function Definition and Variable Scope',
        'Introduction to Classes in Python',
        'Using String Functions and Other Built-In Functions',
        'Understanding Lists and Using List Operations',
        'Python as a Computer Programming Language',
        'Datatypes and General Programming Concepts',
        'Mathematical Functions, Strings and Objects',
        'For Loops, While Loops, and Nested Loops',
        'Basic Function Definition and Variable Scope',
        'Introduction to Classes in Python',
        'Using String Functions and Other Built-In Functions',
        'Understanding Lists and Using List Operations'
    ]

  return (
    <div className='final_classroom'>
        <div className='class_lefty'>
            <Link to='/result' >&#9001; &nbsp; Your courses</Link>
            <div className='classroom_nav_left'>
                <div onClick={()=>setTopic(!topic)} >
                    <Buttons
                    text='Topics'
                    src={topics}
                    alt='topics'
                    />
                </div>
                <div>
                    <Buttons
                    text='Students'
                    src={students}
                    alt='students'
                    num='| 1245'
                    />
                </div>
            </div>
            {topic && (<div className='final_classroom_left'>
                <div className='scrollbar'>
                {lists.map((data, index) => (
                    <div key={index} className='topics'>
                        <div className='inner_left'>
                            <img src={play} alt='play'></img>
                            <p>{data}</p>
                        </div>
                        <hr />
                    </div>
                ))}
                </div>
            </div>)}
        </div>

        <div className='final_classroom_right'>
            <div className='classroom_nav_right'>
                <div>
                    <Buttons
                    text='Chat'
                    src={chat}
                    alt='chat'
                    />
                </div>
                <div>
                    <Buttons
                    text='Note'
                    src={note}
                    alt='note'
                    />
                </div>
                <div>
                    <Buttons
                    text='Video'
                    src={video}
                    alt='video'
                    />
                </div>
                <div>
                    <Buttons
                    text='Lab'
                    src={lab}
                    alt='lab'
                    />
                </div>
            </div>
            <figure>
                <div style={{'height': '0', 'padding-bottom': 'calc(56.30%)', 'position':'relative', 'width': '45em'}}>
                    <iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/6338eae94083cf00934ac9b4" style={{'border':'0', 'height':'100%', 'left':'0', 'overflow':'hidden', 'position':'absolute', 'top':'0', 'width':'100%'}} 
                    title="Embedded content made on Kapwing" 
                    width="100%">
                    </iframe>
                </div>
                <figcaption>{lists[0]}</figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Classroom