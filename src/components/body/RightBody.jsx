import React from 'react'
import Input from '../input/Input'
import './body.css'
import tick from '../../assets/img/tick.svg'
import YesNo from '../yesNo/YesNo'

const RightBody = () => {
  return (
    <section className='Hero_right'>
        <div className='hero_tick_container'>
            <p className='hero_p'>
                <img src={tick} alt='tick'></img>
            </p>
        </div>
        <ol>
            <div>
            <li>Course of study in school:</li>
            <Input type='text' placeholder='Course of study' />
            </div>

            <div>
            <li>Are you a student?</li>
            <div className='Yesno_option'>
                <YesNo text='Yes' /> 
                <YesNo text='No' />
            </div> 
            </div>

            <div>
            <li>Did you graduate?</li>
            <div className='Yesno_option'>
                <YesNo text='Yes' /> 
                <YesNo text='No' />
            </div>
            </div>

            <div>
            <li>Does your country require post-graduation service?</li>
            <div className='Yesno_option'>
                <YesNo text='Yes' /> 
                <YesNo text='No' />
            </div>
            </div>
        </ol>
    </section>
  )
}

export default RightBody