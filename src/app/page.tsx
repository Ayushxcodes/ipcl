import AboutUs from '@/components/landing/AboutUs'
import HeroSection from '@/components/landing/HeroSection'
import Verticals from '@/components/landing/OurVerticals'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <Verticals/>
    </div>
  )
}

export default Homepage