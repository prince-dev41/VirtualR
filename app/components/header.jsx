'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/images/logo.png'
import { AlignJustify, X } from 'lucide-react';

function Header() {
    // Le state pour le menu burger
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center h-[60px] sticky z-10 top-0 py-1 px-[1%] backdrop-blur-md border-b border-neutral-600">
    
      <a href="/" className="logo flex items-center justify-between">
        <Image src={logo} alt="logo" width={50} height={50}/>
        <h1 className='text-xl'>VirtualR</h1>
      </a>

      {/* Les liens de navigation */}
      <div className="hidden md:flex text-paragraph items-center gap-5">
        <a href="/">Features</a>
        <a href="/">Workflow</a>
        <a href="/">Pricing</a>
        <a href="/">Testimonials</a>
      </div>

      {/* Les boutons */}
      <div className="hidden md:flex items-center justify-between w-80">
        <button className='border-[1px] border-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md'>Sign in</button>
        <button className='bg-orangeColor px-4 py-2 bg-gradient-to-br from-orange-500 to-orange2Color rounded-md'>Create an account</button>
      </div>

      {/* Le menu mobile */}
        <div className={`${isOpen ? 'flex flex-col justify-between p-5 md:hidden absolute top-[60px] left-0 w-full h-[300px] bg-neutral-800' : 'hidden'}`}>
            {/* Les liens de navigation */}
            <div className="flex flex-col text-md gap-5">
                <a href="/">Features</a>
                <a href="/">Workflow</a>
                <a href="/">Pricing</a>
                <a href="/">Testimonials</a>
            </div>

            {/* Les boutons */}
            <div className="flex items-center justify-between w-80">
                <button className='border-[1px] border-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md'>Sign in</button>
                <button className='bg-orangeColor px-4 py-2 bg-gradient-to-br from-orange-500 to-orange2Color rounded-md'>Create an account</button>
            </div>
        </div>

      {/* Le menu burger */}
      <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <AlignJustify />}
      </div>
    </nav>
  )
}

export default Header
