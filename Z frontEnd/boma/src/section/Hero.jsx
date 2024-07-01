import React from 'react';
import { useRef } from 'react';

import './hero.css';
import  photo_7 from '../components/assets/photo_7.jpg';
import  photo_2 from '../components/assets/photo_2.jpg';
import  photo_3 from '../components/assets/photo_3.jpg';
import  photo_4 from '../components/assets/photo_4.jpg';
import  photo_6 from '../components/assets/photo_6.jpg';
import next_icon from '../components/assets/next-icon.png'
import back_icon from '../components/assets/back-icon.png'


const Hero = () => {
  const slider = useRef();
  let tx = 0;  //tx is translateX
  const slideForward =()=>{
    if(tx > -60){
      tx -=40;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
  }
  
  const slideBackward =()=>{
    if(tx < 0){
      tx += 40;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
  }
  return (
    <div className='hero'>
      <p>Meat Your needs!</p>
        <img src={next_icon} alt="" className='next-btn'onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className='hero-gallery'>
        
      <div className="gallery" ref={slider}>        
        <img src={photo_2} alt="" />
        <img src={photo_3} alt="" />
        <img src={photo_4} alt="" />
        <img src={photo_6} alt="" />
        <img src={photo_7} alt="" />
       </div>  
      </div>
      <button>See more here </button>
    
    </div>
  )
}

export default Hero
