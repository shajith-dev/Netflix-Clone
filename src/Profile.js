import React from 'react'
import './Profile.css'
import {useNavigate} from 'react-router-dom'

function Profile({url,name}) {
    function userDetails(){
        return url;
    }
    let navigate = useNavigate()
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }}
        className='prof'
    >
        <img
            onClick={()=>{navigate('/home')}}
            src={url}
            alt="profile"
            className='profile'
            style={{
                marginBottom:'8px'
            }}
        />
        <p style={{color:'grey'}}>{name}</p>
    </div>
  )
}

export default Profile