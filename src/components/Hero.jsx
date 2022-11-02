import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import heart from '../assets/heart.png'
import calories from '../assets/calories.png'


function Hero() {
  return (
    <div className='hero'>
        <div className='Left-h'> 
            <Header/>
            {/* the best ad */}

            <div className='the-best-ad'>
                <div></div>
                <span>the best fitness club in town</span>
            </div>

            {/* hero heading */}

            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div><span>In here we will help you to shape your ideal body and 
                    live up your life to the fullest</span>
                </div>
            </div>
         

         {/* figures */}
         <div className="figures_1">
            <div>
                <span>100</span>
                <span>expert coachs</span>
            </div>
            <div>
            <span>+978</span>
            <span>members joined</span>
            
            </div>
            <div>
            <span>+50</span>
            <span>fitness programs</span>
            </div>
            </div>
            
            {/* hero-button */}
           <div className='hero-buttons'>

         <button className='btn'>Get Started</button>
         <button className='btn'>Learn More</button>
         </div>
         </div>
        <div className='right-h'> 
        <button className="btn">Join Now</button>

        <div className="heart-rate"></div>
        <img src={heart} alt='hrt' />
        <span>Heart-Rate </span>
        <span>116 bpm</span>
        </div>
            
         </div>
         
    
    
  )
}

export default Hero
