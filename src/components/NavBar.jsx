import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

    const [nav, setNav] = useState(false);
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
            <h1 className="text-2xl ml-2">LILY FOSTER-GRELLIS</h1>
            {/*text is 24px, margin-left 8px*/}
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

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
        >
            {nav ? <FaBars size={40} /> : <FaBars size={30}/>}
        </div>
        {/*onClick, change state*/}

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700">
                {navLinks.map(({ id, link}) => (
                <li
                    key={link}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    {link}
                </li>
                ))}
            </ul>
        )}
        {/* If nav is false (at line.6) the full screen menu is not displayed unless state is changed to true via onClick*/}

    </div>
  );
};

export default NavBar