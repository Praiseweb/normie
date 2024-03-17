import React from 'react'
import social from "../assets/socials.svg"
import jointhenormiecommunity from "../assets/jointhenormiecommunity.svg"
import telegram from "../assets/normietelegram.svg"
import twitter from "../assets/normietwitter.svg"
import normiewoman from "../assets/normiefatwoman.svg"
import Bubbles from './Bubbles'

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

      <Bubbles/>
    </div>
  )
}

export default Socials