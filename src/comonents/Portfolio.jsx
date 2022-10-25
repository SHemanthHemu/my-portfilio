import React from "react";
import mes from "../images/mes.jpg";
import reporting from "../images/reporting.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
            Portfolio
          </p>
          <p className="py-6 font-bold">
            Hear you can see some of the projects that i have worked on...
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8  sm:px-0 ">
          <div className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
            <img src={mes} alt="mes" className="w-full h-auto rounded-lg " />
            <div className="mt-10 p-3">
              <p className="indent-10">
                MES is machine control which will be available on top of the
                scada systems to ensure the correct material flow in the shop
                floor
              </p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
            <img src={reporting} alt="reporting" className="w-full h-[235px] rounded-lg"/>
            <div className="mt-10 p-3">
              <p className="indent-10">
                Reporting system will generate the report based on the claint
                requirement like Day wise, Month Wise and machine wise to know
                the target Vs actual performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
