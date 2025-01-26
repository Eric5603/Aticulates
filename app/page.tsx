import React from 'react'
import Hero3 from './components/HeroSection'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import FooterSection from './components/FooterSection'  
import NavSection from './components/NavSection'
import TestimonialSection from './components/TestimonialSection'
import AboutUsSection from './components/AboutUsSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
export default function page() {
  return (
    <>
    <NavSection />
    <Hero3 /> 
    <AboutUsSection />
    <WhyChooseUsSection />
    <FeaturedProjectsSection />
    <TestimonialSection />
    <FaqSection />
    <CtaSection />
    <FooterSection />
    </>
  )
}

  