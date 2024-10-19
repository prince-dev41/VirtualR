import React from 'react'

function HeroSection() {
  return (
    <section className="flex items-center justify-center mb-20 mt-44 md:mt-10 h-[700px]">
      <div className="text-center flex flex-col gap-10 items-center w-[900px]">
        <h1 className="md:text-6xl">
            VirtualR build tools <span className="text-orangeColor bg-gradient-to-r from-orange-500
             to-orange2Color text-transparent bg-clip-text">for developers</span>
        </h1>

        <p className="text-neutral-500 text-paragraph">
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
            Get started today and turn your imagination into immersive reality!
        </p>

        {/* les boutons */}
        <div className="flex text-paragraph items-center justify-center gap-10">
            <button className='bg-orangeColor px-4 py-2 bg-gradient-to-br from-orange-500 to-orange2Color rounded-md'>
                Start for free
                </button>
            <button className='border-[1px] border-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md'>
                Documentation
                </button>
        </div>

        {/* les videos d'illustration */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <video 
                src="/videos/video1.mp4" 
                className="w-[500px] h-[300px] object-cover rounded-md border-[1px] border-orangeColor" 
                autoPlay 
                loop 
                muted 
                playsInline
                />
                <video 
                    src="/videos/video2.mp4" 
                    className="w-[500px] h-[300px] object-cover rounded-md border-[1px] border-orangeColor" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                </div>
         </div>
    </section>
  )
}

export default HeroSection
