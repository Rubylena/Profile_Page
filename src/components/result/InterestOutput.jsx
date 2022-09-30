import React from 'react'
import { useLocation } from 'react-router-dom'

const InterestOutput = () => {
  const location = useLocation()

  const data = location.state?.data;
  console.log({data})
  
  return (
    <div>InterestOutput</div>
  )
}

export default InterestOutput