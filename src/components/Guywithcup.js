import React from 'react'
import buynormie from "../assets/buynormie.svg"
import normiedudewithcup from "../assets/normiedudewithcup.svg"
import tokensupply from "../assets/tokensupply.svg"
import tokenaddressorgin from "../assets/tokenaddressorgin.svg"

function Guywithcup() {
  return (
    <div className=' flex flex-row'>

      <div>
        <img src={normiedudewithcup} alt="" />
        <img src={buynormie} alt="" />
      </div>

      <div>
        <img src={tokensupply} alt="" />
        <img src={tokenaddressorgin} alt="" />
      </div>
    </div>
  )
  
  
}

export default Guywithcup