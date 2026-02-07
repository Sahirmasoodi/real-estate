import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = ({dark,setDark}) => {
    const[showNav ,setShowNav] = useState(false)
    useEffect(()=>{
      if(showNav){
        document.body.style.overflow="hidden"
      }
      else{
        document.body.style.overflow="auto"

      }
      return ()=>{
        document.body.style.overflow="auto"
      }
    },[showNav])
    function handleClick(){
        setShowNav(false)
    }
  return (
   <>
      <nav className='w-1/2 lg:w-1/3 hidden md:block '>
        <ul className="flex justify-evenly  items-center p-4 text-white font-semibold">
          <li>
            <a href="#home" className="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">Listings</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-500">Success Stories</a>
          </li>
          <li>
         <button onClick={()=>setDark(!dark)} className={` text-white px-3 w-14 rounded-full text-center  h-  md:block ${dark ? ' text-4xl ' : ' text-2xl'}`}>{dark ?'☼' :'☾'}</button>
          </li>
        </ul>
      </nav>

    <button className=' md:hidden' onClick={()=>setShowNav(true)}>
        <img src={assets.menu_icon}/>
    </button>

     {
        showNav &&
        <nav className={` flex flex-col  w-screen fixed  md:hidden top-0 bottom-0 right-0  bg-gradient-to-r from-gray-500 to-gray-300 text-lg z-30 ${dark && 'bg-gradient-to-r from-black to-black text-white'}`}>
      <button className='self-end p-3' onClick={handleClick}>
        <img className='w-8 ' src={assets.cross_icon}/>
      </button>
        <ul className=" flex flex-col items-center gap-5 ">
          <li>
            <a href="#home" onClick={handleClick} className="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleClick} className="hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick} className="hover:text-blue-500">Listings</a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleClick} className="hover:text-blue-500">Success Stories</a>
          </li>
          {/* <li>
         <button onClick={()=>setDark(!dark)} className={`bg-black text-black px-3 w-14 rounded-full text-center  h-10  md:block ${dark ? 'bg-gray-50 text-4xl ' : 'text-gray-50 text-2xl'}`}>{dark ?'☼' :'☾'}</button>
          </li> */}
        </ul>
      </nav>
     }
  </>
  )
}

export default Navbar
