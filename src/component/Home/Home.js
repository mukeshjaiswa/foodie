import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '../../assest/logo.jpg'
import About from '../About/About'

export default function Home() {
    return (
        <>
               <Navbar/>
            <div className='w-[80%] h-[90vh]  m-auto flex items-center   font-sans mt-10   sm:mt-0'>
                <div className='w-full  sm:flex sm:items-center sm:justify-between sm:gap-10 '>
                    <div className='w-full md:w-1/2  space-y-4   '>
                        <h1 className='text-green-500 font-semibold mt-10 '>WELCOME TO OUR</h1>
                        <div className='space-y-4'>
                            <h1 className='text-7xl text-slate-800 font-bold'>Healthy Food </h1>
                            <h1 className='text-7xl text-slate-800 font-bold'>Collection!</h1>
                        </div>
                        <p className='space-y-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aperiam mollitia laborum, inventore eos dolores nesciunt facilis eaque explicabo perspiciatis hic velit magnam magni provident voluptatum, qui voluptatem tempore ut modi eligendi nulla aliquam impedit perferendis. Odit et iste possimus?</p>
                        <div className=''>
                            <button className='px-3 py-1 border-2 border-green-500 rounded-xl hover:bg-green-500 hover:text-white'>Our Menu</button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 '>
                        <img src={logo} alt="" className=' sm:[300px[ sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full' />
                    </div>
                </div>
            </div>
           
        </>
    )
}
