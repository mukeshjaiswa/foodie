import { Star } from 'lucide-react'
import React from 'react'

import { customer } from './CustomerData'

export default function Customer() {
    return (
        <div id='customer' className='w-[80%] m-auto font-sans mt-10'>

            <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-center'> Our Customer's</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis exercitationem nesciunt consectetur amet dolore ex, neque aliquid, alias tempora asperiores quisquam saepe at quasi! Sed obcaecati corrupti dicta incidunt?</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5  gap-5'>
                    {customer.map((items) => (
                        <div key={items.id} className='flex flex-col items-center justify-center space-y-3 hover:bg-red-100 cursor-pointer mb-5 shadow-md py-2 rounded-md '>
                            <img src={items.image} alt="" className='w-[80px] h-[80px] rounded-full' />

                            <div className='flex items-center '>
                                <Star size={20} className='fill-green-500 text-green-500 ' />
                                <Star size={20} className='fill-green-500 text-green-500' />
                                <Star size={20} className='fill-green-500 text-green-500' />
                                <Star size={20} className='fill-green-500 text-green-500' />
                                <Star size={20} className='fill-green-500 text-green-500' />
                            </div>

                            <p className='text-center '>{items.text}</p>
                            <h1 className=' text-lg font-bold text-green-600'>{items.name}</h1>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
