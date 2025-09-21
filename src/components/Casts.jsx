import React from 'react'
import Arrowside from '../assets/icons/Arrowside.png'
import picture from '../assets/photos/picture.png'
import picture1 from '../assets/photos/picture1.png'
import picture3 from '../assets/photos/picture3.png'
import picture2 from '../assets/photos/picture2.png'

function Casts() {
  return (
    <div className="Casts max-w-6xl mx-auto my-24 overflow-hidden bg-white">
        <div className="flex items-center justify-between my-6">
        <div className="flex items-center">
           <h2 className='text-4xl font-bold text-black'>Casts</h2>
        </div>
        <button className='flex items-center'>
            <p className='text-[18px] text-rose-700'>See more</p>
            <img className='w-[16px] h-[17px]' src={Arrowside} alt="btn" />
        </button>
        </div>
        <div className="grid grid-cols-4 gap-x-12">
            <div className="picture1 flex flex-col">
              <div className="images">
                <img src={picture} alt="boy" />
              </div>
              <div className="peragraft p-2">
                <p>Keanu Reeves</p>
              </div>
            </div>
            <div className="picture2 flex flex-col">
                <div className="images">
                <img src={picture1} alt="boy" />
              </div>
              <div className="peragraft p-2">
                <p>Ryan Reynolds</p>
              </div>
            </div>
            <div className="picture3 flex flex-col">
                <div className="images">
                <img src={picture3} alt="girl" />
              </div>
              <div className="peragraft p-2">
                <p>Timothée Chalamet</p>
              </div>
            </div>
            <div className="picture4 flex flex-col">
                <div className="images">
                <img src={picture2} alt="girl" />
              </div>
              <div className="peragraft p-2">
                <p>Chloë Grace Moretz</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Casts