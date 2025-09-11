import React from 'react'
import Image from 'next/image'
import IconButton from './IconButton'
import Button from './Button'

const ReadyToSave = () => {
  return (
     <section className='p-3  pb-36 border-y border-white/10'>
    <div
         className="bg-black max-w-6xl mx-auto rounded-4xl flex items-center justify-center px-4 relative overflow-hidden border border-white/10" >
      {/* Background Image (main) */}
{/* Background Image (upper half only) */}
<div className="absolute inset-0 h-1/2">
  <Image
    src="/service/servicebg.svg"
    alt="Service Background"
    fill
    priority
    className="object-cover object-top"
  />
</div>



      {/* Gradient Overlay Image (imagbg.svg) */}
      <Image
        src="/clients/gradient.png"
        alt="Gradient Overlay"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-24 mb-16 text-center relative z-10 flex flex-col items-center justify-center gap-6">
        {/* About Us Badge */}
        <IconButton icon="/ready.svg"  text="Become a Part of Us" className="w-auto" gradient />

        {/* Main Heading */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-6xl font-light leading-tight">
         Ready to Save Time <br/> with AI?
        </h1>

        <h3 className="text-offwhite max-w-xl">
         Stop wasting hours on repetitive tasks. Our AI agents handle the busywork so your team can focus on growth, innovation, and what really matters.
        </h3>

          <Button px="px-6 sm:px-10">Contact us</Button>
      </div>
  
    </div>
     </section>
  )
}

export default ReadyToSave
