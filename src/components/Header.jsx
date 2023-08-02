import logo from '../../images/logo.svg'

import { Navbar } from "./Navbar.jsx"

export const Header = ()=> {
    return (
        <header className='absolute w-full h-[100px] px-6 py-8 flex place-content-between items-center 
         font-Barlow '>
            <img src={logo}></img>
            <Navbar></Navbar>
        </header>
    )
}