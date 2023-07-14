import React from 'react'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'

import './Header.css'
import logo from '../assets/logo.png'
function Header() {
  const [open, setOpen] = useState(false)
 
 
  return (
    <>
     <div className = "container-nav">
      <div className="logo"><img src={logo} /></div>
      <div className="Nav">READY TO GO</div>
      <ul className='menu'>
          <li>
            <a href='/'>
              <AiOutlineUser
                size={24}
                style={{ color: 'black' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <MdLocationOn
                size={24}
                style={{ color: 'black' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <BiSearch
                size={24}
                style={{ color: 'black' }}
              />
            </a>
          </li>
          <li>
          <button
              className='sidebar_toggle'
              onClick={()=>{setOpen(!open)}}
            >
              <AiOutlineBars
                size={24}
                style={{ color: 'black' }}
              />
            </button>
          </li>
        </ul>
    </div>
    
    <div className= {`sidebar ${open ? `active` : `inactive`}`}>
        <button
          className='sidebar_toggle inner'
          
        >
          {/* <AiOutlineBars
            size={24}
            style={{ color: 'black' }}
          /> */}
        </button>
        <div className='sidebar-container'>
          <div className='sidebar-container--element'>Home</div>
          <div className='sidebar-container--element'>Rides</div>
          <div className='sidebar-container--element'>YourBooking</div>
          <div className='sidebar-container--element'>Location</div>
          
        </div>
      </div>

    </>
  )
}



export default Header

