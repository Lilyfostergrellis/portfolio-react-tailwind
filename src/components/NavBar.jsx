import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
    {/*display-flex, justify-content space-between, align-items center, width 100%, white text black background, position fixed*/}
        <div>
            <h1 className="text-4xl ml-2">LILY FOSTER-GRELLIS</h1>
            {/*text is 36px, margin-left 8px*/}
        </div>

        <ul className="flex">
            <li className="px-4 cursor-pointer">Home</li>
            <li className="px-4 cursor-pointer">Home</li>
            <li className="px-4 cursor-pointer">Home</li>
        </ul>


    </div>
  )
}

export default NavBar