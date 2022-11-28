import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import play from '../assets/img/play.svg'
import students from '../assets/img/students.svg'
import topics from '../assets/img/topics.svg'
import chat from '../assets/img/chat.svg'
import note from '../assets/img/note.svg'
import video from '../assets/img/video.svg'
import lab from '../assets/img/lab.svg'
import one from '../assets/img/1.jpg'
import two from '../assets/img/2.jpg'
import three from '../assets/img/3.jpg'
import four from '../assets/img/4.jpg'
import msg from '../assets/img/msg.svg'
import './classroom.css'
import Buttons from '../components/buttons/Buttons'
import ClassroomHeader from '../components/header/ClassroomHeader'


const Classroom = (props) => {
    const[topic, setTopic] =useState(false)
    const[student, setStudent] =useState(false)
    // const[options, setOptions] =useState(topic
    
    const[active, setActive] = useState(0)
    const[newActive, setNewActive] = useState(false)
    const[studentMsg, setStudentMsg] = useState(false)
    
    const topicsList =[
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

    const studentsList = [
        {
            src: one,
            name: 'Mary Shiwa'
        },
        {
            src: two,
            name: 'John Smith'
        },
        {
            src: three,
            name: 'Betty Tom'
        },
        {
            src: four,
            name: 'German Alter'
        },
        {
            src: one,
            name: 'Mary Shiwa'
        },
        {
            src: two,
            name: 'John Smith'
        },
        {
            src: three,
            name: 'Betty Tom'
        },
        {
            src: four,
            name: 'German Alter'
        }
    ]

    const value = [
        {
            text: 'Video',
            src: video,
            alt: 'video'
        },
        {
            text: 'Lab',
            src: lab,
            alt: 'lab'
        },
        {
            text: 'Note',
            src: note,
            alt: 'note'
        },
        {
            text: 'Chat',
            src: chat,
            alt: 'chat'
        }
    ]

    const major = [
        {
            id: false,
            text: 'Topics',
            src: topics,
            alt: 'topics'
        },
        {
            id: true,
            text: 'Students',
            src: students,
            alt: 'students',
            num: '| 7'
        }
    ]

  return (
    <div>
        <ClassroomHeader />
        <div className='final_classroom'>
            <div className='class_lefty'>
                <Link to='/result' >&#9001; &nbsp; Your courses</Link>
                <div className='classroom_nav_left'>
                    <div onClick={()=>setTopic(!topic)}
                    >
                        <Buttons
                        action={()=>setNewActive(major[0].id)}
                        index={major[0].id}
                        active={newActive}
                        text={major[0].text}
                        src={major[0].src}
                        alt={major[0].alt}
                        />
                    </div>
                    <div
                    onClick={()=>setStudent(!student)}
                    >
                        <Buttons
                        action={()=>setNewActive(major[1].id)}
                        index={major[1].id}
                        active={newActive}
                        text={major[1].text}
                        src={major[1].src}
                        alt={major[1].alt}
                        num={major[1].num}
                        />
                    </div>
                </div>
                {!topic && (
                <div className='final_classroom_left'>
                    <div className='scrollbar'>
                    {topicsList.map((data, index) => (
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
                {student && (
                    <div className='final_classroom_left'>
                        <div className='scrollbar'>
                        {studentsList.map((data, index) => (
                            <div key={index}
                            onClick={()=>setStudentMsg(index)}
                            className='topics'>
                                <div className='inner_left_student'>
                                    <div className='student_left'>
                                        <img src={data.src} alt='play'className='student_img' ></img>
                                        <p>{data.name}</p>
                                    </div>
                                    <div
                                    className={`student_msg ${
                                        studentMsg === index && "student_msg_active"
                                    }`}
                                    >
                                        <img src={msg} alt='message'
                                        ></img>
                                        <p>Write a message</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                        </div>
                    </div>
                )}
            </div>

            <div className='final_classroom_right'>
                <div className='classroom_nav_right'>
                    {value.map((data, index)=>(
                        <div key={index} onClick={()=>setActive(index)} 
                        >
                            <Buttons
                            index={index}
                            active={active}
                            text={data.text}
                            src={data.src}
                            alt={data.alt}
                            />
                        </div>
                    ))}
                </div>
                <figure>
                    <div style={{'height': '0', 'padding-bottom': 'calc(56.30%)', 'position':'relative', 'width': '40em'}}>
                        <iframe allow="autoplay; gyroscope;" 
                        allowfullscreen height="100%" 
                        referrerpolicy="strict-origin" 
                        src="https://www.kapwing.com/e/6338eae94083cf00934ac9b4" 
                        style={{'border':'0', 'height':'100%', 'left':'0', 'overflow':'hidden', 'position':'absolute', 'top':'0', 'width':'100%'}} 
                        title="Embedded content made on Kapwing" 
                        width="100%">
                        </iframe>
                    </div>
                    <figcaption style={{'margin-top': '1em'}} >{topicsList[0]}</figcaption>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Classroom