import React from 'react'
import styled from 'styled-components';
import ContactUsForm from './ContactUsForm';
import Vpsheader from './Vpsheader';
import VpsFooter from './VpsFooter';
export default function ContactUs() {
    const Wrapper = styled.section`
       .contact-form{
        max-width: 50rem;
        margin: auto;
       }
        
    `;
    
    
  return (
    <>
<Vpsheader />
    <Wrapper className='container'>
        {/* <h2 className='m-3 d-flex justify-content-center'>Feel Free to Contact Us</h2> */}
        <iframe className='mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.294628389434!2d76.99814141488879!3d28.440533582493913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17276a89269b%3A0xd6595c3fa3fd0bbd!2sVPS%20Engineering%20Corporation!5e0!3m2!1sen!2sin!4v1681029462271!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className=''>
<ContactUsForm/>
</div>
<hr/>
    </Wrapper>
    <VpsFooter/>
    </>
  )
}
