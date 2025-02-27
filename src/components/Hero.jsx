import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1260px] m-auto p-4 '>
       <div className='max-h-[500px] relative '>

        {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-axl sm:text-5xl md:text-6xl lg:7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>

                <h1 className='px-4 text-axl sm:text-5xl md:text-6xl lg:7xl font-bold text-orange-500'>Foods <span className='text-white'>Delivered</span></h1>
            </div>
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full max-h-[400px] object-cover'/>
       </div>
    </div>
  )
}

export default Hero