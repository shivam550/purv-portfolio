import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setAcitve] = useState(false)
  
  return (
    <nav >
      <div className='w-full h-auto bg-trans flex justify-between items-center px-8 py-6'>
        <div className='logo'>
          <h5>Logo</h5>
        </div>
        <div className="nav-menu hidden sm:flex gap-4">
          <div className="nav-item">
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </div>
          <div className="nav-item">
            <Link className='nav-link' to='/experience'>
              Experience
            </Link>
          </div>
          <div className="nav-item">
            <Link className='nav-link' to='/project'>
              Project
            </Link>
          </div>
          <div className="nav-item">
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </div>

        </div>
        <div className='block sm:hidden'>
          <GiHamburgerMenu className='text-2xl cursor-pointer' onClick={() => { setAcitve(!active) }} />

        </div>
      </div>
     {
      active ? (
        <div className={`fixed top-12 right-3 z-10 rounded-xl shadow-md  text-end w-40 p-8  bg-orange-500 transform transition-all duration-300 ease-in-out ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="nav-item">
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </div>
            <div className="nav-item">
              <Link className='nav-link' to='/about' onClick={()=>{setAcitve(false)}}>
                About
              </Link>
            </div>
            <div className="nav-item">
              <Link className='nav-link' to='/experience'  onClick={()=>{setAcitve(false)}}>
                Experience
              </Link>
            </div>
            <div className="nav-item">
              <Link className='nav-link' to='/project'  onClick={()=>{setAcitve(false)}}>
                Project
              </Link>
            </div>
            <div className="nav-item">
              <Link className='nav-link' to='/contact'  onClick={()=>{setAcitve(false)}}>
                Contact
              </Link>
            </div>
        </div> 
      ): false
     }
    </nav>

  )
}

export default Navbar