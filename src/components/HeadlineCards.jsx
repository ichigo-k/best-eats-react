import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1260px] p-4  mx-auto py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, BOGO's Out</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>

            <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='max-h-[160px] md:max-h-[200px] object-cover rounded-xl w-full' />
        </div>



        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Soeul's Flaming Burger</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>

            <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='max-h-[160px] md:max-h-[200px] object-cover rounded-xl w-full' />
        </div>


        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Ribs of Delight</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>

            <img src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='max-h-[160px] md:max-h-[200px] object-cover rounded-xl w-full' />
        </div>
    </div>
  )
}

export default HeadlineCards