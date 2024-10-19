import React from 'react'
import { Check, CheckCircle, CheckCircle2, Fingerprint } from 'lucide-react'

function WorkflowItem({title, description}) {
  return (
    <div className="">
      <div className="flex items-center gap-5">
        <div className="bg-neutral-900 rounded-full p-2">
        <span className="text-green-500"><CheckCircle2/></span>
        </div>
      <h1 className="text-xl text-white">
        {title}
      </h1>
      </div>
      <p className="text-neutral-500 text-justify text-paragraph mt-2 pl-14">
            {description}
        </p>
    </div>
  )
}

export default WorkflowItem
