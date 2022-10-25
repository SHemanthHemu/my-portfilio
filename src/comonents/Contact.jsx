import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-full text-white bg-gradient-to-b from-black to-gray-800   "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full pt-40">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            CONTACT
          </p>
          <p className="py-6">You can reach me by submitting the form below</p>
        </div>
        <div className="flex justify-center items-center pb-40">
          <form
            action="https://getform.io/f/3abda9ea-8fcb-4d81-966d-e3d494a6cca4"
            method="post"
            className="flex flex-col w-full md:w-1/2 gap-4 pb-10"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="mail"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300">
              Conact me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
