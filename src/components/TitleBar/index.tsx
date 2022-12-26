import React from 'react'
import vector from 'vector.svg'
import './style.scss'
function index() {
  return (
    <div>
      <div className='title'>
        <div className='titledown'>
            Title
        </div>
        <div className='titlenumbercolor'>
            <div className='titlenumber'>43</div>
        </div>
        <div className='vector'>
            <img src={vector} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default index
