import React from 'react'
import './buttons.css'

const Buttons = ({text, src, alt, num, active, index, action}) => {
  return (
    <div
    className={`classroom_btn ${
      active === index && "active"
    }`}
    onClick={action}
    >
        <div>
            <img src={src} alt={alt} className='classroom_img'></img>
        </div>
        <p>{text}</p>
        <span>{num}</span>
    </div>
  )
}

export default Buttons