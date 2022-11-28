import React from 'react'
import BodyContainer from '../components/body/BodyContainer'
import Header from '../components/header/Header'
import Profile from '../components/profile/Profile'
import InterestOutput from '../components/result/InterestOutput'

const Result = () => {
  return (
    <div>
      <Header />
      <BodyContainer>
        <Profile />
        <InterestOutput />
      </BodyContainer>
    </div>
  )
}

export default Result