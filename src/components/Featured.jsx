import React from 'react'
import poster from '../assets/posters/poster.png'
import poster1 from '../assets/posters/poster1.png'
import poster2 from '../assets/posters/poster2.png'
import poster3 from '../assets/posters/poster3.png'
import mbdicon from '../assets/posters/mbdicon.png'
import tomicon from '../assets/posters/tomicon.png'
import Arrowside from '../assets/icons/Arrowside.png'

function Featured() {
  return (
    <div className="featured max-w-6xl mx-auto overflow-hidden my-24 bg-white">
      <div className="flex items-center justify-between">
     <div className="flex py-4">
        <h2 className='text-4xl font-bold text-black'>Featured</h2>
     </div>
     <button className='flex items-center'>
      <p className='text-[18px] text-rose-700'>See more</p>
      <img className='w-[16px] h-[17px]' src={Arrowside} alt="btn" />
     </button>
      </div>
     <div className="grid grid-cols-4 gap-x-12">
        <div className="poster1 flex flex-col">
           <div className="images">
            <img src={poster} alt="btn" />
           </div>
           <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,Current-2019</p>
            <span className='font-bold text-sm'>Stranger Things</span>
           </div>
           <div className="icon flex items-center justify-between">
            <div className="flex">
             <img className='text-black mr-2 w-[35px] h-[17px]' src={mbdicon} alt="icon" /><span className='text-gray-600 text-sm'>860/100</span>
             </div>
             <div className="flex">
             <img className='text-black mr-2 w-[16px] h-[17px]' src={tomicon} alt="icon" /><span className='text-gray-600 text-sm'>100%</span>
             </div>
           </div>
           <div className="text-[12px] text-gray-500 py-3">
            <p>Action Advanture, Horror</p>
           </div>
        </div>
        <div className="poster2 flex flex-col">
            <div className="images">
                <img src={poster1} alt="btn" />
            </div>
               <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,Current-2019</p>
            <span className='font-bold text-sm'>Batman Bigins</span>
           </div>
           <div className="icon flex items-center justify-between">
            <div className="flex">
             <img className='text-black mr-2 w-[35px] h-[17px]' src={mbdicon} alt="icon" /><span className='text-gray-600 text-sm'>860/100</span>
             </div>
             <div className="flex">
             <img className='text-black mr-2 w-[16px] h-[17px]' src={tomicon} alt="icon" /><span className='text-gray-600 text-sm'>100%</span>
             </div>
           </div>
           <div className="text-[12px] text-gray-500 py-3">
            <p>Action Advanture</p>
           </div>
        </div>
        <div className="poster3 flex flex-col">
            <div className="images">
              <img src={poster2} alt="" />
            </div>
               <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,Current-2019</p>
            <span className='font-bold text-sm'>Spider-Man : Into The Spider Verse</span>
           </div>
           <div className="icon flex items-center justify-between">
            <div className="flex">
             <img className='text-black mr-2 w-[35px] h-[17px]' src={mbdicon} alt="icon" /><span className='text-gray-600 text-sm'>860/100</span>
             </div>
             <div className="flex">
             <img className='text-black mr-2 w-[16px] h-[17px]' src={tomicon} alt="icon" /><span className='text-gray-600 text-sm'>100%</span>
             </div>
           </div>
           <div className="text-[12px] text-gray-500 py-3">
            <p>Action Advanture, Horror</p>
           </div>
        </div>
        <div className="poster4 flex flex-col">
            <div className="images">
                <img src={poster3} alt="btn" />
            </div>
               <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,Current-2019</p>
            <span className='font-bold text-sm'>Dunkirk</span>
           </div>
           <div className="icon flex items-center justify-between">
            <div className="flex">
             <img className='text-black mr-2 w-[35px] h-[17px]' src={mbdicon} alt="icon" /><span className='text-gray-600 text-sm'>860/100</span>
             </div>
             <div className="flex">
             <img className='text-black mr-2 w-[16px] h-[17px]' src={tomicon} alt="icon" /><span className='text-gray-600 text-sm'>100%</span>
             </div>
           </div>
           <div className="text-[12px] text-gray-500 py-3">
            <p>Action Advanture, Horror</p>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Featured