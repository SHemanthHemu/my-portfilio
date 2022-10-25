import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justfy-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <div>
          <p className="text-xl mt-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem
            magnam omnis aliquid enim sed provident laborum fuga. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus, quae deserunt.
            Architecto, autem. Quisquam, enim maxime aliquam quasi odio modi.
            Assumenda a illum, sunt iure quae nemo. Veniam, alias nemo. Odio
            consequatur obcaecati vitae expedita architecto ad voluptatem minima
            quos deserunt iusto.
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae
          deserunt. Architecto, autem. Quisquam, enim maxime aliquam quasi odio
          modi. Assumenda a illum, sunt iure quae nemo. Veniam, alias nemo.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Natus, quae
          deserunt. Architecto, autem. Quisquam, enim maxime aliquam quasi odio
          modi. Assumenda a illum, sunt iure quae nemo. Veniam, alias nemo.
        </p>
      </div>
    </div>
  );
}

export default About;
