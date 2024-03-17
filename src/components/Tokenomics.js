import React from 'react'
import Tokenomicss from "../assets/tokenomics.svg"
import bub1 from "../assets/bub1.svg"

function Tokenomics() {
  return (
    
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative">
        <img src={Tokenomicss} alt="" className='my-10' />
        <p className='text-center lg:text-right lg:text-5xl text-white b-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nobis facilis obcaecati? Aliquam fugit laudantium quo assumenda similique. Facere, recusandae perspiciatis totam praesentium quisquam velit sint commodi quasi mollitia ea explicabo ut quis, magni aperiam, tempore non corporis delectus rem. Animi quasi exercitationem similique voluptatibus tenetur? Ullam harum perspiciatis commodi?</p>

        <img src={bub1} alt="" className='absolute top-1 left-[-82px] z-[-1] w-72'/>
        <img src={bub1} alt="" className='absolute bottom-[357px] right-[-82px] z-[-1] w-80 rotate-45'/>
      </div>
   
  )
}

export default Tokenomics