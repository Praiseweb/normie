import React from 'react'

import normiedudewithshirt from "../assets/normiedudewithshirt.svg"
import joinnormie from "../assets/joinnormie.svg"
import buynormie from "../assets/buynormie.svg" 
import Bubbles from './Bubbles'

function Joinnormie() {
  return (
    
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative bg-[#1D1D1D]">
        <img src={joinnormie} alt="" className='w-[272px] lg:w-[670px]' />
        <p className='text-center lg:text-5xl text-white b-10'>
  Through thick and thin the <span style={{ color: '#E11CD9' }}>$Normie</span> have stayed resilient. We support the <span style={{ color: '#E11CD9' }}>$NORMIE</span> narrative across the blockchain and have love for Normies all around the world! Together, we are unstoppable!
        </p>
        
         
        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=8uiGzEgcoMmuSFjpFMxhkFNfPm7FrRgT2RgcY5TZ8MDn&fixed=in" target="_blank" rel="noopener noreferrer" className='z-20'>
        <img src={buynormie} alt="" className='p-4 lg:w-auto z-20'/> 
        </a>
            
        
        
        
        <div className='flex flex-row item-start w-full lg:mt-[-200px]'>
          <img src={normiedudewithshirt} alt="" className=' lg:mt-[0]'/>
        </div>
        <img src="" alt="" />

       <Bubbles/>
        </div>
    
  )
}

export default Joinnormie