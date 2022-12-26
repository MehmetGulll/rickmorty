import React from 'react'
import digieggs from '../digieggs.svg'
import searchicon from '../searchicon.svg'
import search from '../search.svg'
import star from '../star.svg'
import favorites from '../favorites.svg'
import '../App.css'
function index() {
  return (
    <div>
      <div className='container'>
        <img src={digieggs} className='digieggs' alt=""></img>
        <input type="text" className='input' placeholder=''></input>
        <img src ={searchicon} className='searchicon' alt=""></img>
        <img src = {search} className='search' alt=""></img>
        <img src={star} className='star' alt=""></img>
        <img src={favorites} className='favori' alt=""></img>
       </div>
    </div>
  )
}

export default index
