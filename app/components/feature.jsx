import React from 'react'
import FeatureItem from './featureItem'
import { BatteryCharging, Bot, Fingerprint, GlobeLock, PlugZap, ShieldHalf } from 'lucide-react'

function FeatureSection() {
  return (
    <section className="flex flex-col text-center items-center justify-center mb-20 mt-44 gap-10 md:mt-10">
      <h1 className="text-paragraph text-center inline-block bg-neutral-900 rounded-full px-5 py-2">
        <span className="bg-gradient-to-r from-orangeColor to-orange2Color text-transparent bg-clip-text">
            FEATURE
        </span>
      </h1>

      <h1 className="md:text-6xl">
         Easily build <span className="text-orangeColor bg-gradient-to-r from-orange-500
             to-orange2Color text-transparent bg-clip-text">your code</span>
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureItem icon={<Bot/>} title="Drag-and-Drop Interface" description="Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."/>
        <FeatureItem icon={<Fingerprint/>} title="Multi-Platform Compatibility" description="Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets."/>
        <FeatureItem icon={<ShieldHalf />} title="Built-in Templates" description="Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments."/>
        <FeatureItem icon={<BatteryCharging/>} title="Real-Time Preview" description="Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments."/>
        <FeatureItem icon={<PlugZap />} title="Collaboration Tools" description="Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing."/>
        <FeatureItem icon={<GlobeLock />} title="Analytics Dashboard" description="Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."/>
      </div>

    </section>
  )
}

export default FeatureSection
    