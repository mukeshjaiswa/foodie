import { ShoppingCart } from 'lucide-react'
import React from 'react'

import { shopdata } from '../Data/Data'

export default function Shop() {
    return (
        <div id='shop' className='w-[80%] m-auto mt-10'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold text-center mb-2'>Food shop</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex animi explicabo. Voluptate quibusdam id autem dolorem, modi, consequuntur tempore quos dignissimos sapiente sequi numquam fugit neque eligendi quas tenetur.</p>
                <div className='mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-2 '>
                    {shopdata.map((items) => (
                        <div className=' mb-10 text-center shadow-lg rounded-md group overflow-hidden'>
                            <img src={items.image} alt='chicken' className='w-[300px] cursor-pointer h-[250px] rounded-t-md transition-transform duration-300 group-hover:scale-105' />
                            <div className='mt-2 font-sans flex flex-col items-center justify-center'>
                                <h1 className='font-semibold '>{items.text}</h1>
                                <div className=' w-full relative py-1 '>
                                    <p className='font-bold text-green-600 '>$ {items.price}</p>
                                    <div className=' absolute right-0 top-0 p-1 rounded-sm bg-green-500 text-white cursor-pointer hover:bg-green-400'>

                                        <ShoppingCart className='' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
