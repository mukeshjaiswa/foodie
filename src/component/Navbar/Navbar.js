import { Menu, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { a } from 'react-router';
import logo from '../../assest/logo.jpg'

export default function Navbar() {
    const [openmenu, setOpenmenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleropenmenu = () => {
        setOpenmenu(!openmenu)
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);  
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`w-full  h-[70px] flex   items-center sticky top-0  font-sans z-50 transition-all duration-500 ${isScrolled ? 'bg-blue-800 shadow-md' : 'bg-transparent'}`} >
            {/* {desktop responsive}/ */}
            <div className=' w-[90%] sm:w-[80%] m-auto py-2  flex items-center justify-between'>
                <a href='/' className='flex items-center gap-2 '>
                    <img src={logo} alt="'logo" className='w-[40px] h-[40px] rounded-full' />
                    <h1 className={`text-md font-semibold  ${isScrolled ? 'text-white ' : 'text-black'}`}>Foodie</h1>
                </a>
                <div className=' flex items-center '>
                    <ul className=' items-center gap-6 hidden sm:flex'>


                        <a href='/' className={`list-none px-2 py-1 text-center hover:bg-[#15e915] rounded-sm  cursor-pointer hover:text-white font-semibold ${isScrolled ? 'text-white  bg-transparent'  : 'text-black'}`}>Home</a>
                        <a href='#about' className={`list-none px-2 py-1 text-center hover:bg-[#15e915] rounded-sm  cursor-pointer hover:text-white font-semibold ${isScrolled ? 'text-white  bg-transparent'  : 'text-black'}`}>About</a>
                        <a href='#shop' className={`list-none px-2 py-1 text-center hover:bg-[#15e915] rounded-sm  cursor-pointer hover:text-white font-semibold ${isScrolled ? 'text-white bg-transparent'  : 'text-black'}`}>Shop</a>
                        <a href='#customer' className={`list-none px-2 py-1 text-center hover:bg-[#15e915] rounded-sm  cursor-pointer hover:text-white font-semibold ${isScrolled ? 'text-white  bg-transparent'  : 'text-black'}`}>Customer</a>
                        <li className={`list-none px-2 py-1 text-center hover:bg-[#15e915] rounded-sm  cursor-pointer hover:text-white font-semibold ${isScrolled ? 'text-white bg-transparent'  : 'text-black'}`}>Contact</li>
                    </ul>
                    <div className='sm:hidden p-2 rounded-md border border-green-500'>
                        {!openmenu ?
                            <Menu onClick={handleropenmenu} />
                            :
                            <X onClick={handleropenmenu} />
                        }
                    </div>
                  

                </div>

            </div>
            {/* {mobile responsive} */}
            {openmenu ?
            <div className='fixed inset-0 z-10 backdrop-blur-sm bg-white/30'>
                        <div className='w-[60%] absolute top-0 right-0  flex sm:hidden h-screen bg-gray-50  '>
                            <div className=' absolute right-2 top-2  rounded-md  '>
                            <X size={30} onClick={handleropenmenu} />
                        </div>
                            <ul className=' w-full     mt-10 border-t '>
                            

                                <li className='w-full  border-b py-3 list-none px-2text-center hover:bg-[#73fb73] rounded-sm  cursor-pointer hover:text-white font-semibold px-5 '>Home</li>
                                <li className='w-full  border-b py-3 list-none px-2text-center hover:bg-[#73fb73] rounded-sm  cursor-pointer hover:text-white font-semibold px-5 '>About</li>
                                <li className='w-full  border-b py-3 list-none px-2text-center hover:bg-[#73fb73] rounded-sm  cursor-pointer hover:text-white font-semibold px-5 '>Shop</li>
                                <li className='w-full border-b py-3 list-none px-2text-center hover:bg-[#73fb73] rounded-sm  cursor-pointer hover:text-white font-semibold px-5 '>Customer</li>
                                <li className='w-full  border-b py-3 list-none px-2text-center hover:bg-[#73fb73] rounded-sm  cursor-pointer hover:text-white font-semibold px-5 '>Contact</li>
                            </ul>
                        </div> 
                        </div>
                        : ''}
        </div>
    )
}
