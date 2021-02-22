import React, { useEffect, useState } from 'react'
import logo from "../../content/images/logo.svg";
import Hamburger from '../Hamburger/Hamburger';





const Navbar = () => {

    const [showNavButtons, setShowNavButtons] = useState(false)

    const handleScrollEvent = () => {
        (window.scrollY + 30 > window.innerHeight) ? setShowNavButtons(true) : setShowNavButtons(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent)
    }, [])

    return (
        <div className={`w-screen h-24 z-50 flex flex-row justify-between items-center fixed top-0 ${showNavButtons ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <div className="flex pl-2 sm:pl-10 align-middle">
                <img className="fill-current w-9 max-h-9 mx-4" alt="JC" src={logo}></img>
            </div>
            <Hamburger onClick={()=>{}}></Hamburger>
        </div>
    )
}

export default Navbar
