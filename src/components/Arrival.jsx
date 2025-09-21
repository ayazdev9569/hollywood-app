import React from 'react'
import poster4 from '../assets/cards/poster4.png'
import poster5 from '../assets/cards/poster5.png'
import poster6 from '../assets/cards/poster6.png'
import poster7 from '../assets/cards/poster7.png'
import mbdicon from '../assets/posters/mbdicon.png'
import tomicon from '../assets/posters/tomicon.png'
import Arrowside from '../assets/icons/Arrowside.png'


function Arrival() {
  return (
    <div className="Arrival max-w-6xl mx-auto my-24 overflow-hidden bg-white">
      <div className="heading flex items-center justify-between">
        <div className="flex">
          <h1 className='text-4xl font-bold text-black py-4'>Arrival</h1>
        </div>
        <button className='flex items-center gap-1'>
          <p className='text-[18px] text-rose-700'>See more</p>
          <img className='w-[16px] h-[17px]' src={Arrowside} alt="icon" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-12">
        <div className="card1 flex flex-col">
          <div className="images">
            <img src={poster4} alt="card" />
          </div>
          <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,2021</p>
            <span className='font-bold text-sm'>Duna</span>
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
            <p>Action Advanture, Drama</p>
          </div>
        </div>
        <div className="card2 flex flex-col">
          <div className="images">
            <img src={poster6} alt="btn" />
          </div>
          <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,2021</p>
            <span className='font-bold text-sm'>No Time To Die</span>
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
            <p>Action Advanture, Traler</p>
          </div>
        </div>
        <div className="card3 flex flex-col">
          <div className="images">
            <img src={poster7} alt="btn" />
          </div>
          <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,2021</p>
            <span className='font-bold text-sm'>Shang-Chi and the Legend of the Ten Rings</span>
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
            <p>Action Advanture, Fantasy</p>
          </div>
        </div>
        <div className="card4">
          <div className="images">
            <img src={poster5} alt="btn" />
          </div>
          <div className="peragraft my-3">
            <p className='text-[12px] text-gray-400'>USA,2021</p>
            <span className='font-bold text-sm'>Don't Breathe 2</span>
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

export default Arrival