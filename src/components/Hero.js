import React from 'react'
import normie from "../assets/normie.svg"
import buynormie from "../assets/buynormie.svg"
import normiedude from "../assets/normiedude.svg"
import normieroll from "../assets/normieroll.svg"
import dexscreener from "../assets/dexscreener.svg" 
import monarch from "../assets/monarch.svg" 
import Bubbles from './Bubbles'
function Hero() {
  return (
    <div>
      <div className="HERO flex flex-col items-center p-4 lg:p-10 lg:pt-2 relative z-10 " >
      <div className='w-full flex items-end justify-end'>
     <a href="http://t.me/PraiseMonarch" target="_blank" rel="noopener noreferrer">
     <img src={monarch} alt="" className='my-3 w-80' />
     </a>
      </div>

        <img src={normie} alt="" className='w-[879px] ' />
        
        <div className='flex flex-col lg:flex-row'>

          <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=8uiGzEgcoMmuSFjpFMxhkFNfPm7FrRgT2RgcY5TZ8MDn&fixed=in" target="_blank" rel="noopener noreferrer">
          <img src={buynormie} alt="" className='p-4'/>   
          </a>

          <a href="https://dexscreener.com/solana/8uiGzEgcoMmuSFjpFMxhkFNfPm7FrRgT2RgcY5TZ8MDn" target="_blank" rel="noopener noreferrer">
          <img src={dexscreener} alt="" className='p-4'/>   
          </a>

        </div>
        <div className="guy w-full flex flex-col lg:flex-row  justify-start lg:pt-10">

        <img src={normiedude} alt="" className='mt-[-62px] lg:mt-[0]'/>

        <p className='text-center lg:text-right lg:text-5xl text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, quia.</p>

        </div>

        <img src={normieroll} alt="" className='hidden lg:flex absolute bottom-0 w-[1000px] max-w-none lg:w-auto' />

       <Bubbles/>
      </div>
        <img src={normieroll} alt="" className='z-50 flex lg:hidden fixed bottom-0 w-[1000px] max-w-none lg:w-auto' />

    </div>
  )
}

export default Hero