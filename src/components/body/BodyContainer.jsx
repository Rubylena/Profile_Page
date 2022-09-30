import React from 'react'
import LeftBody from './LeftBody'
import './body.css'

const BodyContainer = ({children}) => {
  return (
    <section className='Hero'>
        <div>
            <LeftBody />
        </div>
        <div>
        {children}
        </div>
    </section>
  )
}

export default BodyContainer