import React from 'react'
import Hero from "./components/Hero"
import Joinnormie from "./components/Joinnormie"
import Tokenomics from "./components/Tokenomics"
import Socials from "./components/Socials"
import Guywithcup from "./components/Guywithcup"

function App() {
  return (
    <div className='w-full overflow-clip'>
      <Hero/>
      {<Joinnormie/>}
      {<Tokenomics/>}
      {<Guywithcup/>}
      {<Socials/>}
    </div>
  )
}

export default App