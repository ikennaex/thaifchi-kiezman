import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Advantages from '../../Components/Advantages/Advantages'
import Stats from '../../Components/Stats/Stats'
import MarqueeText from '../../Components/Marquee/Marquee'
import CoreValues from '../../Components/CoreValues/CoreValues'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        {/* <Stats/> */}
        <About />
        <CoreValues />
        <Services />
        <Advantages />
        {/* <MarqueeText /> */}
    </div>
  )
}

export default Homepage