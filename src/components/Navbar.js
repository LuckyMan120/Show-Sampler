import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTypo3} from '@fortawesome/free-brands-svg-icons'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons'


import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    console.log('Show Button')
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  } 

  window.addEventListener('resize', showButton);
  console.log(button)

  useEffect(() => {
    showButton()
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Show Sampler 
            <FontAwesomeIcon className='nav-icon' icon={faTypo3} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }
          </div>
          <ul className={click ? "nav-menu active": 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Github</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Search</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>Log In</Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline'>Log In</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
