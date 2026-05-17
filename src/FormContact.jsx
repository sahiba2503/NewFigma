import logo from "/Icons (4).svg"
import React from 'react'

function FormContact() {
  return (
    <div className='formInputSection'>
        <div className='contactFormImg'></div>
        <div className='contactformSection'>
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.as commodi? Quidem aut obcaecati fugit dolorum impedit quas.</p>
            <div className="inputcontainer">
              <img src={logo} alt="" />
            <input type="text" placeholder='Full Name'/>
            </div>
            <div className="inputcontainer">
               <img src={logo} alt="" />
            <input type="text" placeholder='Email Address'/>
            </div>
            <textarea name="" id="" placeholder='Message'></textarea>
            <input type="checkbox"  />
            <button className='Sendmessage'>Send message</button>
        </div>
      
    </div>
  )
}

export default FormContact
