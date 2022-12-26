import React from 'react'
import { ReactComponent as Vector } from '.../vector.svg'
import './style.scss'
function TitleBar() {
  return (
    <div>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
    <div className='title'>
      <div className='titledown'>
          Title
      </div>
      <div className='titlenumbercolor'>
          <div className='titlenumber'>43</div>
      </div>
      <div className='vector'>
          <Vector/>
      </div>
    </div>
  </div>
  )
}

export default TitleBar