import React from 'react'
import {ReactComponent as Digieggs} from '../digieggs.svg'
import {ReactComponent as Searchicon} from '../searchicon.svg'
import {ReactComponent as Search} from '../search.svg'
import {ReactComponent as Star} from '../star.svg'
import {ReactComponent as Favorites} from '../favorites.svg'

import '../style.scss'
function SearchBar() {
  return (
    <div className='container'>
        <Digieggs className='digieggs'/>
        <input type="text" className="input" placeholder=''></input>
        <Searchicon className="searchicon"/>
        <Search className = "search"/>
        <Star className = "star"/>
        <Favorites className="favori"/>
    </div>
  )
}

export default SearchBar
