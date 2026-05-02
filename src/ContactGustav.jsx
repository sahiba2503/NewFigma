import React from 'react'
import iconsArrow from "/Icons_Phosphor.svg"
function ContactGustav() {
  return (
    <div className='contactContainer'>
    <div className='contactHeading'>
      <h1>Gustav Henriksson brony att valpromenera.Skrapbot stafettlakare.</h1>
      <img src={iconsArrow} alt="" />
    </div>
   
          <p>Lorem ipsum mobillangfilm haffa om betalvard transprson i retweeta aven om koscheria . Amanda Magnusson Mats Eliasson</p>
         
          <div className='inputSection'>
            <input type="text" placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
          </div>
  )
}

export default ContactGustav
