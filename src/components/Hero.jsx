import React from 'react'
import Header from './Header/Header'
import './Hero.css'
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
         <div className="figures">
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
         </div>
        <div className='Right-h'> right-side</div>
    </div>
  )
}

export default Hero
