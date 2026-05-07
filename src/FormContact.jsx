import React from 'react'

function FormContact() {
  return (
    <div className='formInputSection'>
        <div className='contactFormImg'></div>
        <div className='contactformSection'>
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.as commodi? Quidem aut obcaecati fugit dolorum impedit quas.</p>
            <input type="text" placeholder='Full Name'/>
            <input type="text" placeholder='Email Address'/>
            <textarea name="" id="" placeholder='Message'></textarea>
            <input type="checkbox"  />
            <button className='Send message'>Send message</button>
        </div>
      
    </div>
  )
}

export default FormContact
