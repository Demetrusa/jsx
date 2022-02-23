import React, {useState} from 'react'
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu  = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)

  return (
   <>
   <nav className="navbar">
       <div className="navbar-container">
        <div className='navbar-logo'>
            <a href="#">Logo</a>
            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas  fa-bars'} />
            </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>    {/* it let nav-bar menu disapear on  click*/}
            <li className="nav-item">
            <a className='nav-links' href="#" onClick={closeMobileMenu}>Home</a>
            </li>
            <li className="nav-item">
            <a className='nav-links' href="#" onClick={closeMobileMenu}>Services</a>
            </li>
            <li className="nav-item">
            <a className='nav-links' href="#" onClick={closeMobileMenu}>Products</a>
            </li>
            <li className="nav-item">
            <a className='nav-links-mobile' href="#" onClick={closeMobileMenu}>Sign Up</a>
            </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Sign UP</Button>}
       </div>
   </nav>
   </>
  )
}

export default Navbar;