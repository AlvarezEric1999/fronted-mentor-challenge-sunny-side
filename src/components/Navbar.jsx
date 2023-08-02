import { useState } from 'react'
import icon from '../../images/icon-hamburger.svg'

export const Navbar = ()=> {


const [show, setShow] = useState(true)

const handleMenu = () => {
    setShow(!show)
}
    return (
        <nav className='h-full w-[600px] flex  justify-end ' >
        
        <ul className={`bg-white py-[35px] w-[329px] h-[305px] z-10 
            absolute left-0 right-0 top-[106px] mx-auto ${show ? 'hidden' : 'flex '} flex-col  items-center place-content-around
            after:content-[""] after:absolute after:right-0 after:top-[-24px]  after:border-[12px]
            after:border-l-transparent after:border-t-transparent  after:border-white 
          
            sm:relative  sm:top-0 sm:after:hidden sm:h-full sm:flex sm:flex-row sm:py-0  sm:w-full sm:bg-transparent sm:place-content-evenly `} >
            <li className='cursor-pointer  sm:text-white'>About</li>
            <li className='cursor-pointer  sm:text-white ' >Services</li>
            <li className='cursor-pointer  sm:text-white  ' >Projects</li>
            <li className='bg-Yellow px-8 py-2 rounded-3xl font-Fraunces sm:bg-white'>CONTACT</li>
        </ul>
        
        
        <div className='sm:hidden'>
            <img src={icon} onClick={handleMenu}></img>
        </div>
        
        </nav>
    )
}