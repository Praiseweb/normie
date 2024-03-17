import React from 'react'
import social from "../assets/socials.svg"
import jointhenormiecommunity from "../assets/jointhenormiecommunity.svg"
import telegram from "../assets/normietelegram.svg"
import twitter from "../assets/normietwitter.svg"
import normiewoman from "../assets/normiefatwoman.svg"
import bub1 from "../assets/bub1.svg"

function Socials() {
  return (
    <div className='relative'>
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative">
        <img src={social} alt="" className='pb-10'/>
        <img src={jointhenormiecommunity} alt="" />
      </div>
      
      <div className=' flex flex-row justify-center pt-10 lg:pt-0'>
        <img src={twitter} alt="" className='px-5'/>
        <img src={telegram} alt="" className='px-5'/>
      </div>

      <div className=' flex justify-end'>
        <img src={normiewoman} alt="" />
      </div>

      <img src={bub1} alt="" className='absolute top-1 left-[-82px] z-[-1] w-72'/>
        <img src={bub1} alt="" className='absolute bottom-[357px] right-[-82px] z-[-1] w-80 rotate-45'/>
    </div>
  )
}

export default Socials