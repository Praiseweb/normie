import React from 'react'
import buynormie from "../assets/buynormie.svg"
import normiedudewithcup from "../assets/normiedudewithcup.svg"
import tokensupply from "../assets/tokensupply.svg"
import tokenaddressorgin from "../assets/tokenaddressorgin.svg"
import bub1 from "../assets/bub1.svg"

function Guywithcup() {
  return (
    <div className=' flex flex-col lg:flex-row lg:px-32 px-4 relative'>

      <div className='lg:w-6/12'>
        <img src={normiedudewithcup} alt="" className=' w-96'/>
        <img src={buynormie} alt="" className=' my-10' />
      </div>

      <div className='lg:w-6/12 flex flex-col justify-end'>
        <img src={tokensupply} alt="" className='pb-10'/>
        <img src={tokenaddressorgin} alt="" className='pb-10'/>
      </div>

      <img src={bub1} alt="" className='absolute top-1 left-[-82px] z-[-1] w-72'/>
        <img src={bub1} alt="" className='absolute bottom-[357px] right-[-82px] z-[-1] w-80 rotate-45'/>
    </div>
  )
  
  
}

export default Guywithcup