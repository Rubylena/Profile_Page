import React from 'react'
import BodyContainer from '../components/body/BodyContainer'
import Profile from '../components/profile/Profile'
import InterestOutput from '../components/result/InterestOutput'

const Result = () => {
  return (
    <BodyContainer>
      <Profile />
      <InterestOutput />
    </BodyContainer>
  )
}

export default Result