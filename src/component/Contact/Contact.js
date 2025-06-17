import { Facebook, Instagram, Mail, MapPin, Phone, Twitch, Twitter } from 'lucide-react'
import React from 'react'

export default function Contact() {
    return (
        <div className='w-[80%] m-auto flex flex-col items-center justify-center mt-10 mb-5 '>

            <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
            <p className='text-lg mt-2 font-semibold'>We'd love to hear from you!</p>

            <div className='grid sm:grid-cols-2 mt-5 px-5'>
                <div className='space-y-3'>
                    <h1 className='font-semibold text-xl'>Get in Touch</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet qui officiis modi, in quo est, cum quisquam sapiente pariatur corporis, fugiat consequuntur atque architecto! Iste, quae dolor corrupti architecto voluptatibus perferendis hic rerum perspiciatis. Sapiente iusto quia quos ea animi!</p>
                    <a  href="https://www.google.com/maps/place/Kathmandu,+Nepal"   target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 cursor-pointer'>
                        <MapPin className=''/>
                        <h1 className='font-semibold font-sans'>Kathmandu, Nepal</h1>

                    </a>
                    <a href='tel:9817361906' className='flex items-center gap-2 cursor-pointer'>
                        <Phone className='fill-black'/>
                        <h1 className='font-semibold font-sans'>9817361906</h1>

                    </a>
                    <a href='mailto:1736mukesh@gmail.com' className='flex items-center gap-2 cursor-pointer'>
                        <Mail className=''/>
                        <h1 className='font-semibold font-sans'>1736mukesh@gmail.com</h1>

                    </a>
                    <div className='flex items-center gap-3'>
                        <a href="https://www.facebook.com">
                        <Facebook size={25} className=' text-green-500 font-normal'/></a>
                        <a href="https://www.twitter.com">
                        <Twitter size={25} className='  text-green-500 font-normal'/></a>
                        <a href="https://www.instagram.com">
                        <Instagram size={25} className=' text-green-500 font-normal'/></a>
                    </div>
                </div>
                <div className='px-10 space-y-3'>
                    <input type="text" placeholder='Name' className='w-full  border-2 border-green-500 rounded-md  outline-none p-2 text-green-500' />
                    <input type="email" placeholder='Email' className='w-full  border-2 border-green-500 rounded-md  outline-none p-2 text-green-500' />
                    <textarea cols={5} rows={5} placeholder='Write your message' className='w-full  border-2 border-green-500 rounded-md  outline-none p-2 text-green-500' />
                    <div className='flex items-center mt-1 justify-center w-full '>

                        <button className='text-center border-transparent border px-5 py-1 text-white bg-green-600 rounded-lg font-semibold hover:bg-transparent hover:border-black hover:text-black hover:shadow-md '>SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
