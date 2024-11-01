import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
  return (
    <div className='allfooter'>
        <div className='copyright'>
            @copyrights Resevered to Vishnu
        </div>
        <div className='links'>
            <Link to="" className='lin'>Home</Link>
            <Link to="" className='lin'>Terms and Conditions</Link>
            <Link to="" className='lin'>About</Link>
            <Link to="" className='lin'>Contact</Link>
        </div>
    </div>
  )
}

export default Footer
