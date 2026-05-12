import React from 'react'
import ContactGustav from "./ContactGustav";
import ContactFirstLast from "./ContactFirstLast";
import ContactMoreLikeThis from "./ContactMoreLikeThis";
import FormContact from "./FormContact"
function Contact() {
  return (
    
    <div className='containerContact'>      
      < ContactGustav />
      < ContactFirstLast />
      < ContactMoreLikeThis />
     <FormContact />
    </div>
  
  )
}

export default Contact
