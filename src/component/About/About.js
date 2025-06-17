import React from 'react'
import bgimage from '../../assest/bg.jpg'
import logo from '../../assest/logo.jpg'
import { todaydata } from '../Data/Data'

export default function About() {
  return (
    <div id='about' style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=' h-auto py-5 mt-10 flex justify-center '>
       <div className=' w-full flex flex-col justify-center items-center mt-10 '>
           <h1 className='text-white text-2xl font-bold mt-10'>TODAY DEAL'S</h1>

           <div className='sm:w-[70%]  m-auto py-3 bg-white flex flex-wrap items-center justify-center gap-10 px-1 border-t-4 rounded-md border-green-400'>
               {todaydata.map((items)=>(
                <div key={items.id} className='flex flex-col items-center '>
                   <img src={items.image} alt="" className='w-[100px] h-[100px] rounded-full' />
                   <h1 className='font-sans font-semibold'>{items.text}</h1>
                   <p  className='font-sans font-semibold'>{items.with}</p>
                   <p className='font-bold text-green-600'>${items.price}</p>
               </div>
               ))}
               
              
           </div>
       </div>
    </div>
  )
}
