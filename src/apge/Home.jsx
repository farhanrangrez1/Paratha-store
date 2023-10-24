import React from 'react'
import Slider from '../component/Slider'
import Youtube from '../component/Youtube'
import Footer from '../component/Footer'
import Hero from '../component/Hero'

function Home() {
  return (
   <>
      <Slider />
      {/* <Hero/> */}
     <Youtube/>
     <Footer/>
   </>
  )
}

export default Home