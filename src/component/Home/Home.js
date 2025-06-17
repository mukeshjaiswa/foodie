import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '../../assest/logo.jpg'


export default function Home() {
    return (
        <>
               <Navbar/>
            <div className='w-[80%] h-auto  m-auto flex items-center   font-sans    sm:mt-0'>
                <div className='w-full  lg:flex lg:items-center lg:justify-between sm:gap-10 '>
                    <div className='w-full space-y-4   '>
                        <h1 className='text-green-500 font-semibold mt-10 '>WELCOME TO OUR</h1>
                        <div className='space-y-4'>
                            <h1 className=' text-4xl md:text-7xl text-slate-800 font-bold'>Healthy Food </h1>
                            <h1 className=' text-4xl md:text-7xl text-slate-800 font-bold'>Collection!</h1>
                        </div>
                        <p className='space-y-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aperiam mollitia laborum, inventore eos dolores nesciunt facilis eaque explicabo perspiciatis hic velit magnam magni provident voluptatum, qui voluptatem tempore ut modi eligendi nulla aliquam impedit perferendis. Odit et iste possimus?</p>
                        <div className=''>
                            <button className='px-3 py-1 border-2 border-green-500 rounded-xl hover:bg-green-500 hover:text-white'>Our Menu</button>
                        </div>
                    </div>
                    <div className='w-full mt-10 sm:mt-0  '>
                        <img src={logo} alt="" className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]  rounded-full' />
                    </div>
                </div>
            </div>
           
        </>
    )
}
