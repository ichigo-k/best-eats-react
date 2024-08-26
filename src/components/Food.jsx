import React from 'react'
import {data} from "../data/data.js"

function Food() {

    const [foods, setFoods] = React.useState(data)


    const filterType =(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category == category
            })
        )
    }


    const filterPrice = (price) =>{
        setFoods(
            data.filter((item)=>{
                return item.price == price
            })
        )
    }

  return (
    <div className='max-w-[1260px] mx-auto px-4 py-12 '>
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap gap-3 max-w-[500px]'>
                    <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>setFoods(data)}>All</button>
                    <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterType('burger')}>Burger</button>
                    <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterType('pizza')}>Pizza</button>
                    <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterType('salad')}>Salad</button>
                    <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterType('chicken')}>Chicken</button>
                </div>
            </div>


            <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between flex-wrap gap-3 max-w-[390px] w-full'>
                <button  className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterPrice("$")}>$</button>

                <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterPrice("$$")} >$$</button>


                <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterPrice("$$$")}>$$$</button>


                <button className='bg-orange-500 border-orange-500 text-white hover:bg-orange-600 ' onClick={()=>filterPrice("$$$$")}>$$$$</button>

            </div>
        </div>
        </div>

       


        <div className='grid grid-cols-2 lg:grid-cols-4  gap-6 pt-4 '>
            {
                foods.map((item, index)=>(
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 ease-in-out rounded-lg'>
                       <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' /> 

                       <div className='flex justify-between px-2 py-4 '>
                        <p className='font-bold '>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                       </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Food