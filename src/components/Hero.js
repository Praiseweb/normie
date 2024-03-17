import React from 'react'
import normie from "../assets/normie.svg"
import buynormie from "../assets/buynormie.svg"
import normiedude from "../assets/normiedude.svg"
import normieroll from "../assets/normieroll.svg"
import dexscreener from "../assets/dexscreener.svg"
import bub1 from "../assets/bub1.svg"
function Hero() {
  return (
    <div>
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative z-10 " >

        <img src={normie} alt="" className='w-[879px] ' />
        
        <div className='flex flex-col lg:flex-row'>

          <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={buynormie} alt="" className='p-4'/>   
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={dexscreener} alt="" className='p-4'/>   
          </a>

        </div>
        <div className="guy w-full flex flex-col lg:flex-row  justify-start lg:pt-10">

        <img src={normiedude} alt="" className='mt-[-62px] lg:mt-[0]'/>

        <p className='text-center lg:text-right lg:text-5xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta ducimus sapiente voluptate a nesciunt asperiores labore vitae laborum, corrupti voluptates itaque fuga dicta similique.</p>

        </div>

        <img src={normieroll} alt="" className='hidden lg:flex absolute bottom-0 w-[1000px] max-w-none lg:w-auto' />

        <img src={bub1} alt="" className='absolute top-1 left-[-82px] z-[-1] w-72'/>
        <img src={bub1} alt="" className='absolute bottom-[357px] right-[-82px] z-[-1] w-80 rotate-45'/>

      </div>
        <img src={normieroll} alt="" className='z-50 flex lg:hidden fixed bottom-0 w-[1000px] max-w-none lg:w-auto' />

    </div>
  )
}

export default Hero