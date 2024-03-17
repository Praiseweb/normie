import React from 'react'
import buynormie from "../assets/buynormie.svg"
import normiedudewithcup from "../assets/normiedudewithcup.svg"
import tokensupply from "../assets/tokensupply.svg"
import tokenaddressorgin from "../assets/tokenaddressorgin.svg"

function Guywithcup() {
  return (
    <div className=' flex flex-col lg:flex-row lg:px-32 px-4'>

      <div className='lg:w-6/12'>
        <img src={normiedudewithcup} alt="" className=' w-96'/>
        <img src={buynormie} alt="" className=' my-10' />
      </div>

      <div className='lg:w-6/12 flex flex-col justify-end'>
        <img src={tokensupply} alt="" className='pb-10'/>
        <img src={tokenaddressorgin} alt="" className='pb-10'/>
      </div>
    </div>
  )
  
  
}

export default Guywithcup