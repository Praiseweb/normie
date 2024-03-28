import React from 'react'
import Tokenomicss from "../assets/tokenomics.svg"  

function Tokenomics() {
  return (
    
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative">
        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=8uiGzEgcoMmuSFjpFMxhkFNfPm7FrRgT2RgcY5TZ8MDn&fixed=in" target="_blank" rel="noopener noreferrer">
          
        </a>
        <img src={Tokenomicss} alt="" className='my-10' />
        <p className='text-center lg:text-5xl text-white b-10'>
        Who needs tokenomics when there no more dev? Enjoy.
        </p>

        <p className='text-center lg:text-5xl text-white b-10'>
        TAX - 0/0
        </p>
      </div>
   
  )
}

export default Tokenomics