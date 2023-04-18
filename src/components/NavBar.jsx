import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

    const navLinks = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "contact",
        },
    ]; {/*created an array for each link in the navbar, to be able to loop over and give unified attributes and behaviours. Any change to names or additional tabs to be made here*/}

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
    {/*display-flex, justify-content space-between, align-items center, width 100%, white text black background, position fixed*/}
        <div>
            <h1 className="text-4xl ml-2">LILY FOSTER-GRELLIS</h1>
            {/*text is 36px, margin-left 8px*/}
        </div>

        <ul className="hidden md:flex">
            {navLinks.map(({ id, link}) => (
            <li
                key={link}
                className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            >
                {link}
            </li>
            ))}
        </ul>

        <div className='cursor-pointer pr-4 z-10 text-gray-200'>
            <FaBars size={40}/>
        </div>

    </div>
  )
}

export default NavBar