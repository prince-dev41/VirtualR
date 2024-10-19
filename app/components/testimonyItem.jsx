import Image from 'next/image'
import React from 'react'

function TestimonyItem({testimony, avatar, name, company}) {
  return (
    <div className="flex border border-neutral-600 rounded-md p-5 flex-col gap-5">
        <p className="text-paragraph text-neutral-300 font-extralight text-justify">
            {testimony}
        </p>
        <div className="flex items-center text-paragraph gap-2">
            <Image src={avatar} alt="avatar" className="rounded-full border border-neutral-600" width={50} height={50}/>
            <div className="flex flex-col">
                <h1 className="text-paragraph font-extralight text-neutral-300 text-start">{name}</h1>
                <p className="text-neutral-600  italic">{company}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonyItem
