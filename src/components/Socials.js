import React from 'react'
import social from "../assets/socials.svg"
import jointhenormiecommunity from "../assets/jointhenormiecommunity.svg"
import telegram from "../assets/normietelegram.svg"
import twitter from "../assets/normietwitter.svg"
import normiewoman from "../assets/normiefatwoman.svg"

function Socials() {
  return (
    <div>
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative">
        <img src={social} alt="" />
        <img src={jointhenormiecommunity} alt="" />
      </div>
      
      <div className=' flex flex-row justify-center'>
        <img src={twitter} alt="" />
        <img src={telegram} alt="" />
      </div>

      <div className='flex'>
        <img src={normiewoman} alt="" />
      </div>
    </div>
  )
}

export default Socials