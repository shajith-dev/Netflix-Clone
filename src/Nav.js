import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
    },[])
  return(
      <div className={`nav ${show && "nav__black"}`}>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
              className='nav__logo'
          />
          <img
              src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"
              alt="profile"
              className='nav__profile'
          />
      </div>
  );
}

export default Nav;
