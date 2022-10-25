import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [nav, setNav] = useState(false);

  const links = [
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
      link: "experence",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div className="font-bold ">
        <h1 className="text-5xl font-signature">Hemanth kumar</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font:medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link.link} smooth duration={700}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="curser-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-start items-center absolute text-gray-300 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 pt-40 ">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 py-6 cursor-pointer capitalize text-4xl hover:scale-110 pt-0"
            >
              <Link onClick={()=>setNav(false)} to={link.link} smooth duration={700}>
              {link.link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;
