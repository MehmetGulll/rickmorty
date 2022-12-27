import React from 'react'
import {ReactComponent as Digieggs} from '../digieggs.svg'
import {ReactComponent as Star} from '../star.svg'
import {ReactComponent as Daire} from '../daire.svg'
import {ReactComponent as Elipse} from '../elips.svg'
import '../theme/App.scss';
function ProfileBar() {
  return (
    <div className='container2'>
          <div className='digcontainer'>
           <Digieggs className = "digieggs2"/>
          </div>
          <div className='starnprofile'>
          <Star className="star1"/>
          <Daire className="rectangle"/>
          <Elipse className="elips"/>
          </div>
    </div>
  )
}

export default ProfileBar