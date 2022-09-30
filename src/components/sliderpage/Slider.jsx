import React, { useState } from 'react'
import ReactSlider from 'react-slider'
import './slider.css'

const Slider = ({text, value, onChange}) => {
    // const [level, setLevel] = useState(0)

  return (
    <div className='interest_slider'>
        <div className='interest_slider_heading'>
            <p>{text}</p>
            <p>{value}/10</p>
        </div>
        <ReactSlider
            className="horizontal-slider"
            trackClassName="slider-track"
            thumbClassName="slider-thumb"
            defaultValue={0}
            max={10}
            value={value}
            onChange={(value)=> onChange(text, value)}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
        />
    </div>
  )
}

export default Slider