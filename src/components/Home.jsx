import React from "react";
import HeroImage from "../assets/profile-picture.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love to work on web applications using innovative technologies like
            React, Tailwind & Next JS.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer"
            >
            Portfolio
                <span className="group-hover:rotate-90 duration-300">
            {/*On hover, button rotates 90 degrees to point down */}
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-xl mx-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;