import React from 'react'
import logo from "/Logo.svg";
import square from "/Group 1670.svg";
import lines from "/Icons (1).svg";
function Navbar() {
  return (
    <nav>
      <div className='navList'>
        <img src={lines} alt=""  className='threeLine'/>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
           </ul>
           </div>
           <div className='logo-btn'>
           <div>
            <img src={logo} alt="logo"  className='rectangularLogo'/>
             <img src={square} alt="logo"  className='squareLogo'/>
           </div>
           <button style={{background:"black",color:"white"}}>Download Now</button>
           </div>
           </nav>
  )
}

export default Navbar
