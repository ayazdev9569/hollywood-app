import React from 'react'
import facebook from '../assets/icons/facebook.png'
import instragram from '../assets/icons/instragram.png'
import twitter from '../assets/icons/twitter.png'
import youtube from '../assets/icons/youtube.png'

function Footer() {
  return (
    <div className="footer w-full h-auto bg-white p-12">
      <div className="icon flex flex-col items-center justify-center">
         <div className="images flex items-center justify-center gap-6">
            <img src={facebook} alt="icon" />
            <img src={instragram} alt="icon" />
            <img src={twitter} alt="icon" />
            <img src={youtube} alt="icon" />
         </div>
             <div className="heading flex items-center justify-center gap-8 p-5">
                <p className='font-bold text-sm'>Conditions of Use</p>
                <p className='font-bold text-sm'>Privacy & Policy</p>
                <p className='font-bold text-sm'>Press Room</p>
             </div>
             <div className="copyright flex items-center justify-center">
                <p className='text-[12px] font-extrabold text-gray-500'>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
             </div>
      </div>
    </div>
  )
}

export default Footer