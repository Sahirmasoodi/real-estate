import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'


const Header = ({dark,setDark}) => {
  return (
    <div id='header' className=' h-screen flex flex-col '>
    <div className='flex justify-between px-3 md:px-0 md:justify-around items-center h-20 '>
       <img className='w-36 h-10' src={assets.logo}/>
      {/* <button onClick={()=>setDark(!dark)} className={`bg-black px-3 w-14 rounded-full text-center  h-10  md:block ${dark ? 'bg-gray-50 text-4xl ' : 'text-white text-2xl'}`}>{dark ?'☼' :'☾'}</button> */}
      <Navbar  setDark={setDark} dark={dark}/>
    </div>
     <div className='p-5 mt-40 lg:mt-52 flex flex-col items-center gap-8 '>
      <p className='text-5xl md:text-7xl text-center text-white font-bold'>Explore homes that <br className='hidden sm:block'/> fit your dreams</p>
      <div>
        <a href='#projects' className='text-white border-2 px-5 py-2 rounded-sm border-white mx-2 font-bold'>Listings</a>
        <a href='#contact' className='text-white px-5 py-2.5 rounded-sm  bg-gray-500 bg-opacity-50 hover:bg-opacity-70 togra font-bold  ' >Contact us</a>
      </div>
     </div>
    </div>
  )
}

export default Header
