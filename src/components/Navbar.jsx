/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: 'Home',
      ref: '#home',
    },
    {
      id: 2,
      text: 'About me',
      ref: '#about-me',
    },
    {
      id: 3,
      text: 'My Projects',
      ref: '#my-projects',
    },
    {
      id: 4,
      text: 'Skills',
      ref: '#skills',
    },
    {
      id: 5,
      text: 'Contact me',
      ref: '#contact-me',
    },
  ];

  // Function to handle scrolling to sections
  const handleScroll = (ref) => {
    const yOffset = -60; // Adjust this value based on your fixed navbar height
    const element = document.querySelector(ref);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMenu(false); // Close the mobile menu after clicking
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img
            src="logo.jpg"
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <h2 className="font-semibold text-xl cursor-pointer">
            Parteek <p className="text-sm">Web Developer</p>
          </h2>
        </div>
        {/**Desktop Nav */}
        <div>
          <ul className="md:flex hidden space-x-8">
            {navItems.map(({ id, text, ref }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
                onClick={() => handleScroll(ref)}
              >
                {text}
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden"
          >
            {menu ? <IoMdClose size={24} /> : <IoMenu size={24} />}
          </div>
        </div>
      </div>
      {/**Mobile Nav */}
      {menu && (
        <div>
          <ul className="md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl">
            {navItems.map(({ id, text, ref }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                key={id}
                onClick={() => handleScroll(ref)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
