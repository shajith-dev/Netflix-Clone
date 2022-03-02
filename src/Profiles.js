import React from 'react'
import './Profile.css'
import Profile from './Profile'

function Profiles() {
  return (
    <div>
        <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
              className='logo'
        />
        <div className='profiles'>
            <p className='watch'>Who's watching?</p>
            <div className='flex'>
                <Profile name={'Kage'} url="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"/>
                <Profile name={'Eren'} url="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                <Profile name={'Naruto'} url="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"/>
                <Profile name={'Jotaro'} url="https://i.pinimg.com/originals/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.png"/>
                <Profile name={'Children'} url="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg"/>
            </div>
            <p className='manage'>Manage Profiles</p>
        </div>
    </div>
  )
}

export default Profiles