'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import WorkflowItem from './workflowItem'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function WorkflowSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const workflowItemsRef = useRef([])

  useEffect(() => {
    const registerScrollTrigger = async () => {
      const ScrollTriggerModule = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger)

      const section = sectionRef.current
      const title = titleRef.current
      const image = imageRef.current
      const workflowItems = workflowItemsRef.current

      gsap.set([title, image, ...workflowItems], { autoAlpha: 0 })

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
        { duration: 0.8, y: 0, autoAlpha: 1, ease: 'power3.out' }
      )
      .fromTo(image,
        { x: -50, scale: 0.9 },
        { duration: 0.8, x: 0, scale: 1, autoAlpha: 1, ease: 'power3.out' },
        '-=0.4'
      )

      workflowItems.forEach((item, index) => {
        tl.fromTo(item,
          { x: 50, autoAlpha: 0 },
          { 
            duration: 0.6, 
            x: 0, 
            autoAlpha: 1, 
            ease: 'power3.out',
          },
          `-=${index ? 0.4 : 0}`
        )
      })

      // Hover animation for workflow items
      workflowItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { 
            scale: 1.05, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { 
            scale: 1, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
      })
    }

    registerScrollTrigger()
  }, [])

  return (
    <section ref={sectionRef} id="workflow" className="flex flex-col text-center items-center justify-center pb-20 border-b border-neutral-600 mt-20 gap-10">
      <h1 ref={titleRef} className="md:text-6xl">
        Accelerate your <span className="text-orangeColor bg-gradient-to-r from-orange-500
             to-orange2Color text-transparent bg-clip-text">coding Workflow.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-between">
        <div ref={imageRef}>
          <Image src="/images/code.jpg" alt="workflow" width={700} height={500}/>
        </div>
        <div className="flex flex-col items-center gap-5">
            <div ref={el => workflowItemsRef.current[0] = el}>
              <WorkflowItem title={"Code merge made easy"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            </div>
            <div ref={el => workflowItemsRef.current[1] = el}>
              <WorkflowItem title={"Review code without worry"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            </div>
            <div ref={el => workflowItemsRef.current[2] = el}>
              <WorkflowItem title={"AI Assistance to reduce time"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            </div>
            <div ref={el => workflowItemsRef.current[3] = el}>
              <WorkflowItem title={"Share work in minutes"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection