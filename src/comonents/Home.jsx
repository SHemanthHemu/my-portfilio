import React from "react";
import hero from "../images/Hero.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 "
    >
      <div
        className="mx-w-screen-lg mx-auto flex flex-col items-center 
      justify-center  h-full text-white md:flex-row p-4"
      >
        <div className="p-8">
          <div className="flex flex-col justify-center h-full px-8">
            <h2 className="text-4xl sm:text-5xl text-white ">
              I AM A FRONTEND DEVELOPER
            </h2>
            <p className="text-gray-500 py-4 max-w-md indent-10">
              having 3 years of IT experence and two years i am closely working
              with frotend tecnology and build awsam UI Components based on the
              claint requirement using various technologies like react.js ,html5
              , css3, tailwindcss, javascript etc..
            </p>
            <div>
              
                <Link to="portfolio" smooth duration={700} className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-200 cursor-pointer">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              
            </div>
          </div>
        </div>
        <div className="pr-8 hover:scale-90 duration-300 h-3/4 w-2/3 ">
          <img
            src={hero}
            alt=" Hero"
            className="rounded-2xl mx-auto  w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
