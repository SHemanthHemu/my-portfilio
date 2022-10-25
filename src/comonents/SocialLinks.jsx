import React from "react";
import {  FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      chaild: (
        <>
          Linkdin <FaLinkedin size={30} />
        </>
      ),
      href: 'www.linkedin.com/in/heamanth-kumar',
      style:'rounded-tr-md'
    },
    {
      id: 2,
      chaild: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
      
    },
    {
      id: 3,
      chaild: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: './Hemanth Resume.docx',
      style:'rounded-br-md',
      download:true
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) =>
          <li
          className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:rounded-r-xl ml-[-100px] hover:ml-[-10px] duration-500" + " " + link.style}
        >
          <a
            href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target={"_blank"}
              rel="noreferrer" 
          >
            <>
              {link.chaild}
            </>
          </a>
        </li>
        )}
        
      </ul>
    </div>
  );
}

export default SocialLinks;
