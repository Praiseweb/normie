import React from 'react'
import bub1 from "../assets/bub1.svg"

function Bubbles() {
  return (
    <div>
        <img src={bub1} alt="" className='absolute top-1 left-[-82px] z-[-1] w-60 lg:w-72'/>
      <img src={bub1} alt="" className='absolute bottom-0 lg:bottom-[357px] right-[-82px] z-[-1] w-60 lg:w-80 rotate-45'/>
    </div>
  )
}

export default Bubbles