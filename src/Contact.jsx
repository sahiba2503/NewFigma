import React from 'react'
import ContactGustav from "./ContactGustav";
import ContactFirstLast from "./ContactFirstLast";
import ContactMoreLikeThis from "./ContactMoreLikeThis";
import FormContact from "./FormContact"
import AboutFooter from './AboutFooter';
function Contact() {
  return (
    <>
    <div className='containerContact'>      
      < ContactGustav />
      < ContactFirstLast />
      < ContactMoreLikeThis />
     <FormContact />
    </div>
    <AboutFooter />
  </>
  )
}

export default Contact
