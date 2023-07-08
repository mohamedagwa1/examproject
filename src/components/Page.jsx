import React from 'react'
import Examhead from './pagecomponents/Examhead'
import Questions from './pagecomponents/Questions'
import Header from './Header/Header'
import Submit from './pagecomponents/Submit'
const Page = () => {
  return (
    <>
      <Header/>
      <div className='page'>
          <div className="overlay">
              <div className='exam-content'>
              <Examhead/>
              <Questions/>
              <Submit/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Page