import React from 'react'
import digieggs from '.../digieggs.svg'
import searchicon from '.../searchicon.svg'
import search from '.../search.svg'
import star from '.../star.svg'
import favorites from '.../favorites.svg'
import './style.scss'
function index() {
  return (
    <div>
         <div className='container'>
        <img src={digieggs} className='digieggs'></img>
        <input type="text" className='input' placeholder=''></input>
        <img src ={searchicon} className='searchicon'></img>
        <img src = {search} className='search'></img>
        <img src={star} className='star'></img>
        <img src={favorites} className='favori'></img>
        </div>
      
    </div>
  )
}

export default index
