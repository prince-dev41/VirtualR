'use client'
import React, { useEffect, useRef } from 'react'
import FeatureItem from './featureItem'
import { BatteryCharging, Bot, Fingerprint, GlobeLock, PlugZap, ShieldHalf } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FeatureSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const features = featuresRef.current

    gsap.set([title, subtitle, ...features], { autoAlpha: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo(title, 
      { y: -50 },
      { duration: 0.6, y: 0, autoAlpha: 1, ease: 'power3.out' }
    )
    .fromTo(subtitle,
      { y: 50 },
      { duration: 0.6, y: 0, autoAlpha: 1, ease: 'power3.out' },
      '-=0.3'
    )

    features.forEach((feature, index) => {
      tl.fromTo(feature,
        { y: 50, autoAlpha: 0 },
        { 
          duration: 0.6, 
          y: 0, 
          autoAlpha: 1, 
          ease: 'power3.out',
        },
        `-=${index ? 0.4 : 0}`
      )
    })

    // Hover animation for feature items
    features.forEach(feature => {
      feature.addEventListener('mouseenter', () => {
        gsap.to(feature, { 
          y: -10, 
          scale: 1.05, 
          duration: 0.3, 
          ease: 'power2.out' 
        })
      })
      feature.addEventListener('mouseleave', () => {
        gsap.to(feature, { 
          y: 0, 
          scale: 1, 
          duration: 0.3, 
          ease: 'power2.out' 
        })
      })
    })

  }, [])

  return (
    <section ref={sectionRef} id="features" className="flex flex-col gap-10 text-center items-center justify-center pb-20 border-b border-neutral-600 mt-20">
      <h1 ref={titleRef} className="text-paragraph text-center inline-block bg-neutral-900 rounded-full px-5 py-2">
        <span className="bg-gradient-to-r from-orangeColor to-orange2Color text-transparent bg-clip-text">
            FEATURE
        </span>
      </h1>

      <h1 ref={subtitleRef} className="md:text-6xl">
         Easily build <span className="text-orangeColor bg-gradient-to-r from-orange-500
             to-orange2Color text-transparent bg-clip-text">your code</span>
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div ref={el => featuresRef.current[0] = el}>
          <FeatureItem icon={<Bot/>} title="Drag-and-Drop Interface" description="Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."/>
        </div>
        <div ref={el => featuresRef.current[1] = el}>
          <FeatureItem icon={<Fingerprint/>} title="Multi-Platform Compatibility" description="Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets."/>
        </div>
        <div ref={el => featuresRef.current[2] = el}>
          <FeatureItem icon={<ShieldHalf />} title="Built-in Templates" description="Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments."/>
        </div>
        <div ref={el => featuresRef.current[3] = el}>
          <FeatureItem icon={<BatteryCharging/>} title="Real-Time Preview" description="Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments."/>
        </div>
        <div ref={el => featuresRef.current[4] = el}>
          <FeatureItem icon={<PlugZap />} title="Collaboration Tools" description="Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing."/>
        </div>
        <div ref={el => featuresRef.current[5] = el}>
          <FeatureItem icon={<GlobeLock />} title="Analytics Dashboard" description="Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."/>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection