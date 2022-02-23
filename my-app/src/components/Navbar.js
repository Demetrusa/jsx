import React, {useState} from 'react'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu  = () => setClick(false);
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
       </div>
   </nav>
   </>
  )
}

export default Navbar;