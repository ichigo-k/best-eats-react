import React from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

function Navbar() {

const [nav, setNav] = React.useState(false)
  return (
    <nav className='max-w-[1260px] mx-auto flex justify-between items-center p-4 '>

        {/* left side */}
        <div className='flex items-center' >
            <div className='cursor-pointer' onClick={()=>setNav((prev)=>!prev)}>
                <AiOutlineMenu size={30}/>
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 '>Best <span className='font-bold'>Eats</span></h1>

            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2 '>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>


        {/* search */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input type='search' placeholder='Search food' className='bg-transparent p-2 focus:outline-none w-full'/>
        </div>


        {/* cart */}
        <button className='bg-black text-white hidden md:flex items-center py-2 gap-x-2 rounded-full '>
            <BsCartFill size={20}/>
            Cart
        </button>


        {/* Mobile Menu */}

        <div className={`bg-black/80 fixed w-full h-screen top-0  z-10 duration-300 ${nav? 'left-0' : 'left-[-100%]'}`}></div>

        <div className={`fixed top-0  w-[300px] h-screen bg-white z-[10] duration-300 ease-out ${nav ? 'left-0' : 'left-[-100%]'}`}>

            <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav((prev)=> !prev)}/>

           
            <h2 className='text-2xl p-4  '>Best <span className='font-bold'>Eats</span></h2>

            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex '> <TbTruckDelivery size={25} className='mr-4'/> Orders</li>

                    <li className='text-xl py-4 flex '> <MdFavorite size={25} className='mr-4'/> Favourites</li>

                    <li className='text-xl py-4 flex '> <FaWallet size={25} className='mr-4'/> Wallet</li>

                    <li className='text-xl py-4 flex '> <MdHelp size={25} className='mr-4'/> Help</li>

                    <li className='text-xl py-4 flex '> <AiFillTag size={25} className='mr-4'/> Promotions</li>

                    <li className='text-xl py-4 flex '> <BsFillSaveFill size={25} className='mr-4'/> Best Ones</li>

                    <li className='text-xl py-4 flex '> <FaUserFriends size={25} className='mr-4'/> Invite Friends</li>

                </ul>
            </nav>

        </div>
    </nav>
  )
}

export default Navbar