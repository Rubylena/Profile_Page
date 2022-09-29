import React from 'react'
import './input.css'


const Input = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className='Input' />
  )
}

export default Input