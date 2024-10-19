import { Fingerprint } from 'lucide-react'
import React from 'react'

function FeatureItem({icon, title, description}) {
  return (
    <div className="">
      <div className="flex items-center gap-5">
        <div className="bg-neutral-900 rounded-full p-2">
        <span className="text-orangeColor">{icon}</span>
        </div>
      <h1 className="text-xl text-white">
        {title}
      </h1>
      </div>
      <p className="text-neutral-500 text-justify text-paragraph mt-5 pl-14">
            {description}
        </p>
    </div>
  )
}

export default FeatureItem
