import React from 'react'
import Logo from"/Logo.svg"
import Yout from "/Youtube.svg"
import Twit from "/Twitter.svg"

function Footer() {
  return (
    <div className='BorderFooter'>
        <div className="innerBorderFooter">
      <div className="logoLinks">
        <img src={Logo} alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="footerLogos">
        <div><img src={Yout} alt="" /> </div>
        <div><img src={Twit} alt="" /></div>
        <div><img src={Yout} alt="" /> </div>
        <div><img src={Twit} alt="" /></div>
      </div>
      <hr />
      <div className='footerLinks'>

        <div>2023 outlined wireframe kit</div>
        <div className='FLinks'>
            <div>Privacy & Policy</div>
            <div>Terms & Conditions</div>
             </div>
      </div>
    </div>
  )
}

export default Footer
