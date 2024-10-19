import React from 'react'
import PricingItem from './pricingItem'

function PricingSection() {
  return (
    <section className="flex flex-col items-center mt-20 gap-10">
        <h1 className="text-6xl">Pricing</h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5">
            <PricingItem priceLabel={"Free"} price={0}/>
            <PricingItem priceLabel={"Pro"} price={10}/>
            <PricingItem priceLabel={"Entreprise"} price={200}/>
        </div>
    </section>
  )
}

export default PricingSection
