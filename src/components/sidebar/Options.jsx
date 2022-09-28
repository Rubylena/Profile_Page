import React from 'react'
import './options.css'


const Options = ({icon, alt, text}) => {
  return (
    <div className='option'>
      <div className='option_bg'>
        <img src={icon} alt={alt} className='option_img'></img>
      </div>
      <p>{text}</p>
      <p>&#8250;</p>
    </div>
  )
}

export default Options
