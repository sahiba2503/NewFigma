import React from 'react'
import logo from "/Logo.svg";
function Navbar() {
  return (
    <nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
           </ul>
           <div className='logo-btn'>
           <div>
            <img src={logo} alt="logo" />
           </div>
           <button style={{background:"black",color:"white"}}>Download Now</button>
           </div>
           </nav>
  )
}

export default Navbar
