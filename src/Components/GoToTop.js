import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";
import $ from 'jquery'; 
export default function GoToTop() {
    const [scrolled1, setScrolled] = useState(false);
    const Wrapper = styled.section`
       display:flex;
       justify-content:center;
       align-items:center;
        .top-btn-prop{
            display:none!important;
        }
       .top-btn{
        font-size:2rem;
        width:3rem;
        height:3rem;
        color:white;
        background-color:black;
        box-shadow:black;
        border-radius:50%;
        position:fixed;
        bottom:2rem;
        right:2rem;
        z-index:999;
        display:flex;
        justify-content:center;
        align-items: center;
        cursor:pointer;
        &--icon{
            animation: gototop 1s linear infinite alternate-reverse
        }
        @keyframes gototop{
            0%{
                transform: translateY(-0.25rem);
            }
            100%{
                transform:translateY(0.8rem);
            }
        }
       }
        
    `;
    const goTobtn = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "auto"});
    }
    
    const listenToScroll =()=>{
        let heightTohidden = 400;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(heightTohidden < winScroll){
            setScrolled(true)
            $('.top-btn-prop').show();
        }
        else{
            setScrolled(false)
            $('.top-btn-prop').hide();
        }
        if(150 < winScroll){
            $('.vpsheader').attr('style','--bs-bg-opacity: 0.7');
            $('.productsList').attr('style','opacity: 0.7');
        }
        else{
            $('.vpsheader').attr('style','--bs-bg-opacity: 1');
            $('.productsList').attr('style','opacity: 1');
        }
    }
useEffect(()=>{
    window.addEventListener('scroll', listenToScroll)
    return ()=> window.removeEventListener('scroll', listenToScroll);
})
  return (
    
    <Wrapper className='top-btn-prop' style={{display:'none'}}>
    <div className='top-btn' onClick={goTobtn}>
        <FaArrowUp className='top-btn--icon' />
    </div>
    </Wrapper>
  )
}
