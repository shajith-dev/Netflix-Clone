import React from 'react'
import './LoginPage.css'
import {BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    let navigate = useNavigate()
  return (
    <div className='flex login'>
        <div className='form'>
            <p className='signin'>Sign In</p>
            <input placeholder='Email or phone number'></input>
            <input placeholder='Password' type='password'></input>
            <button className='btn' onClick={()=>navigate('/profiles')}>Sign In</button>
            <p className='forgot'>Forgot Password?</p>
            <div className='icons'>
                <a href='https://www.instagram.com/sha4ham/' target="_blank" rel="noopener noreferrer"><BsInstagram size={'35px'} className='icon'/></a>
                <a href='https://github.com/d3xferno' target="_blank" rel="noopener noreferrer"><BsGithub size={'35px'} className='icon'/></a>
                <a href='https://www.linkedin.com/in/shajith-hameed-4122a01b8/' target="_blank" rel="noopener noreferrer"><BsLinkedin size={'35px'} className='icon'/></a>
            </div>
            <p style={{color:'white', position:'relative', top:'66px'}}>Made with <FaReact style={{color:'#61DBFB'}} size={'30px'} className='react'/> by Shajith</p>
        </div>
    </div>
  )
}

export default LoginPage