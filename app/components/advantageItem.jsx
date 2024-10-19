import { CheckCircle2 } from 'lucide-react'
import React from 'react'

function AdvantageItem({advantages}) {
  return (
    <div className="flex flex-col gap-5">
      
      {advantages.map((advantage, index) => (
       <div key={index} className="flex gap-5">
        <CheckCircle2/>
         <h1 key={index} className="text-paragraph">{advantage}</h1>
       </div>
      ))}
    </div>
  )
}

export default AdvantageItem
