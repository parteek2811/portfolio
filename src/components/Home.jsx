// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 md:mt-24 space-y-2 order-2 md:order-1'>
                 <span>Welcome to my Portfolio</span>
                 <div className='flex space-x-1 text-2xl md:text-4xl'>
                   <h1>Hello, I am a </h1>
                   {/*<span className='text-red-700 font-bold'> Developer</span>*/}
                   <ReactTyped className='text-red-700 font-bold' strings={["Developer","Programmer","Coder"]} typeSpeed={40} backSpeed={50} loop={true} />
                 </div>
                 <br />
                 <p className='text-sm md:text-md text-justify'>This a Potfolio site to showcase my achiements and gains over the Years,
                    Hope You enjoy your Journey.
                 </p>
                 <br />
                 {/**icons*/}
                 <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                        <div>
                            <h1 className='font-bold'>Availabe on</h1>
                            <ul className='flex gap-2'>
                                <li>
                                    <a href="https://github.com/" target='_blank'>
                                     <FaSquareGithub  className='text-2xl cursor-pointer'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target='_blank'>
                                     <FaLinkedin  className='text-2xl cursor-pointer'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://web.telegram.org/" target='_blank'>
                                     <RiTelegramFill className='text-2xl cursor-pointer' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold'>Currently Working on</h1>
                            <ul className='flex gap-1'>
                                <li><FaReact  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                <li><BiLogoMongodb  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                <li><FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                                <li><SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                            </ul>
                        </div>
                 </div>
                </div>
                <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                 <img src="bg6.png" alt="image" className='rounded-full md:w-[450px]  md:h-[450px]'/>
                </div>
            </div>
      </div>
      <hr />
    </>
  )
}

export default Home