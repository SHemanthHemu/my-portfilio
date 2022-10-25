import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import github from "../images/github.png";
// import graphql from "../images/graphql.png";
import javascript from "../images/javascript.png";
import nextjs from "../images/nextjs.png";
import node from "../images/node.png";
import reactimg from "../images/react.png";
import tailwind from "../images/tailwind.png";

function Expirence() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style:'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style:'shadow-blue-500'
    },
    {
      id: 3,
      src: github,
      title: "GITHUB",
      style:'shadow-gray-400'
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style:'shadow-yellow-500'
    },
    {
      id: 5,
      src: nextjs,
      title: "NEXTJS",
      style:'shadow-white'
    },
    {
      id: 6,
      src: node,
      title: "NODE.JS",
      style:'shadow-green-500'
    },
    {
      id: 7,
      src: reactimg,
      title: "REACT.JS",
      style:'shadow-blue-600'
    },
    {
      id: 8,
      src: tailwind,
      title: "TAILWINDCSS",
      style:'shadow-sky-400'
    },
  ]
  return (
    <div name="experence" className="bg-gradient-to-b from-gray-800 to-black pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full justify-center text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-gray-500 p-2 ">Experence</p>
          <p className="py-6">These are the technologies which i had worked on</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, style, title }) =>
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="html" className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
          </div>
            
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Expirence;
