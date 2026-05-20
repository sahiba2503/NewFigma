
import React,{useState} from 'react'
import logo from "/Logo.svg";
import square from "/Group 1670.svg";
import lines from "/Icons (1).svg";
import { Link } from "react-router-dom";

function Navbar() {
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='NaveBar'>
      <div className='navList'>
        <div  className='threeLine' onClick={()=>{setMenuOpen(!menuOpen)}}>
        <img src={lines} alt="" />
       </div>
       
        <ul className={menuOpen ? "open":""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
      </div>

      <div className='logo-btn'>
        <div className='naveoutlinelogo'>
          <img src={logo} alt="logo" className='rectangularLogo' />
          <img src={square} alt="logo" className='squareLogo' />
        </div>
            
              <button className="subscribe-btn">
      <span className="desktop-text">Download Now</span>
      <span className="mobile-text">Download</span>
    </button>
      
      </div>
    </nav>
  )
}

export default Navbar;
