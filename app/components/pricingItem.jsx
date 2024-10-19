import React from 'react'
import AdvantageItem from './advantageItem'

function PricingItem({priceLabel, price}) {
    const advantages = ["Private board sharing", "Advanced search", "Data export", "Advanced permissions", "1000+ integrations"]
  return (
    <div className="flex text-start p-5 flex-col gap-10 border border-neutral-600 rounded-md">
        <h1>{priceLabel}</h1>
        <h1>{price}$<span className="text-paragraph text-neutral-600">/month</span></h1>
        <AdvantageItem advantages={advantages}/>
        <button className='relative text-paragraph px-4 py-2 rounded-md overflow-hidden group'>
            <span className='relative z-10 bg-gradient-to-r from-orangeColor to-orange2Color text-transparent bg-clip-text group-hover:text-white transition-colors duration-300'>
                Subscribe
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-orangeColor to-orange2Color opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='absolute inset-0 bg-gradient-to-r from-orangeColor to-orange2Color rounded-md z-0'>
                <div className='absolute inset-[1px] bg-blackBg rounded-md'></div>
            </div>
        </button>
    </div>
  )
}

export default PricingItem
