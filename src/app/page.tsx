import AboutUs from '@/components/landing/AboutUs'
import HeroSection from '@/components/landing/HeroSection'
import CaseStudyHero from '@/components/landing/HumanApproach'
import Verticals from '@/components/landing/OurVerticals'
import WhyGenZMatter from '@/components/landing/WhyGenzMatter'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <Verticals/>
      <CaseStudyHero/>
      <WhyGenZMatter/>
    </div>
  )
}

export default Homepage