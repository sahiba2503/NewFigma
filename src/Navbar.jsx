
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
        <div>
          <img src={logo} alt="logo" className='rectangularLogo' />
          <img src={square} alt="logo" className='squareLogo' />
        </div>

        <button style={{ background: "black", color: "white" }}>
          Download Now
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
