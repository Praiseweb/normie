import React from 'react'
import jointhenormiearmy from "../assets/jointhenormiearmy.svg"
import normiedudewithshirt from "../assets/normiedudewithshirt.svg"
import joinnormie from "../assets/joinnormie.svg"
import buynormie from "../assets/buynormie.svg"

function Joinnormie() {
  return (
    <div>
      <div className="HERO flex flex-col items-center p-4 lg:p-10 relative">
        <img src={joinnormie} alt="" className='w-[272px] lg:w-[670px]' />
        <p className='text-center lg:text-4xl w-auto lg:w-[877px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta ducimus sapiente voluptate a nesciunt asperiores labore vitae laborum, corrupti voluptates itaque fuga dicta similique.</p>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={buynormie} alt="" className='p-4 w-[286px] lg:w-auto'/>   
          </a>
        </div>
        
        <div className='flex flex-row item-start w-full lg:m-[-200px]'>
          <img src={normiedudewithshirt} alt="" className=' lg:mt-[0]'/>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Joinnormie