import Image from 'next/image'
import React from 'react'
import WorkflowItem from './workflowItem'

function WorkflowSection() {
  return (
    <section className="flex flex-col text-center items-center justify-center pb-20 border-b border-neutral-600 mt-20 gap-10">
      <h1 className="md:text-6xl">
        Accelerate your <span className="text-orangeColor bg-gradient-to-r from-orange-500
             to-orange2Color text-transparent bg-clip-text">coding Workflow.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-between">
        <Image src="/images/code.jpg" alt="workflow" width={700} height={500}/>
        <div className="flex flex-col items-center gap-5">
            <WorkflowItem title={"Code merge made easy"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            <WorkflowItem title={"Review code without worry"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            <WorkflowItem title={"AI Assistance to reduce time"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
            <WorkflowItem title={"Share work in minutes"} description={"Track the performance of your VR apps and gain insights into user behavior."}/>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection
