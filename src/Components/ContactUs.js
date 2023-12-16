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
        <iframe title='capitalmachinery' className='mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.310053141891!2d77.02016757502777!3d28.47020779143431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d2177cbbc1%3A0x14edcf928038fb6e!2sCapital%20Machineries!5e0!3m2!1sen!2sin!4v1690702319378!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className=''>
<ContactUsForm/>
</div>
<hr/>
    </Wrapper>
    <VpsFooter/>
    </>
  )
}
