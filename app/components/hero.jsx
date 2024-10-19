'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ThreeBackground from '../components/threeBackground'

function HeroSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const paragraphRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const paragraph = paragraphRef.current

    gsap.set([title, paragraph], { autoAlpha: 0 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(title, 
      { y: -50 },
      { duration: 1, y: 0, autoAlpha: 1 }
    )
    .fromTo(paragraph,
      { y: 50 },
      { duration: 0.8, y: 0, autoAlpha: 1 },
      '-=0.5'
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative cursor-pointer flex items-center justify-center py-20 overflow-hidden min-h-screen">
      <ThreeBackground />
      <div className="text-center flex flex-col gap-10 items-center max-w-[900px] px-4 z-10 relative">
        <h1 ref={titleRef} className="text-4xl md:text-6xl">
            VirtualR build tools <span className="text-orangeColor bg-gradient-to-r from-orange-500
             to-orange2Color text-transparent bg-clip-text">for developers</span>
        </h1>

        <p ref={paragraphRef} className="text-neutral-500 text-paragraph">
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
            Get started today and turn your imagination into immersive reality!
        </p>

        <div className="flex text-paragraph items-center justify-center gap-10">
            <button className='bg-orangeColor px-4 py-2 bg-gradient-to-br from-orange-500 to-orange2Color rounded-md'>
                Start for free
            </button>
            <button className='border-[1px] border-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md'>
                Documentation
            </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <video 
            src="/videos/video1.mp4" 
            className="w-full md:w-[500px] h-[300px] object-cover rounded-md border-[1px] border-orangeColor" 
            autoPlay 
            loop 
            muted 
            playsInline
            />
            <video 
                src="/videos/video2.mp4" 
                className="w-full md:w-[500px] h-[300px] object-cover rounded-md border-[1px] border-orangeColor" 
                autoPlay 
                loop 
                muted 
                playsInline
            />
        </div>
      </div>
    </section>
  )
}

export default HeroSection