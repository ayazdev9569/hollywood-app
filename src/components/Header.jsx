import React from 'react'
import herobg from '../assets/icons/herobg.png'
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import menu from '../assets/icons/menu.png'
import imdb from '../assets/icons/imdb.png'
import tomato from '../assets/icons/tomato.png'
import play from '../assets/icons/play.png'

function Header() {
    return (
        <header>
            <div className="images relative w-screen overflow-hidden">
                <img className='w-full h-auto object-cover object-center' src={herobg} alt="human" />
                <div className="absolute top-0 w-full h-full bg-black/15">
                    <div className="max-w-7xl xl:mx-auto mx-4 my-4">
                        <div className="nav flex items-center justify-between gap-2.5">
                            <div className="logo flex items-center gap-2 cursor-pointer">
                                <img className='w-8 h-8 object-cover object-center' src={logo} alt="btn" />
                                <span className='text-white text-xl'>Movie Box</span>
                            </div>
                            <div className="search flex items-center w-auto px-2 bg-transparent border-2 border-white rounded-md">
                                <input className='w-[400px] outline-none px-2 py-1' type="text" placeholder='what do you whant to whach?' />
                                <span>
                                    <img className='text-white' src={search} alt="btn" />
                                </span>
                            </div>
                            <div className="login flex items-center gap-3">
                                <span className='text-white'>log in</span>
                                <img className='w-8 h-8 object-cover' src={menu} alt="btn" />
                            </div>
                        </div>
                        <div className="Header-component flex flex-col items-start w-96 h-72 mt-20">
                            <div className="first flex flex-col">
                                <h1 className='text-white text-5xl font-bold'>John whick 3: parabellum</h1>
                            </div> 
                           <div className="imdb flex my-4">
                            <img className='w-14 mr-6' src={imdb} alt="icon" />    
                                 <img className='w-12' src={tomato} alt="icon" />
                            </div>
                            <div className="peragraft font-medium text-[12px]">
                                <p className='text-white'>Lorem ipsum dolor sit,Lorem ipsum dolor sit. Lorem ipsum dolor sit,Lorem ipsum dolor sit.Lorem ipsum dolor sit,Lorem ipsum dolor sit.Lorem ipsum dolor sit,Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. sit.</p>
                            </div>
                            <button className='p-2 bg-rose-700 rounded-md w-fit flex items-center gap-2 my-4'>
                                <img className='w-auto text-white' src={play} alt="btn" />
                                <a className='text-white uppercase' href="">watch Trailer</a>
                            </button>
                           </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header