// eslint-disable-next-line no-unused-vars
import React from "react";
import ss1 from "../../public/ss1.png";
import next from "../../public/next.png";


const Projects = () => {
    const cardItem = [
        {
          id: 1,
          logo: ss1,
          name: "Horizon",
          description: "The Best Banking App",
          link: "https://github.com/parteek2811/bnk"
        },
        {
          id: 2,
          logo: next,
          name: "Imagify AI",
          description: "A AI to help generate Images",
          link: "https://github.com/parteek2811/ImagifyAI"
        },
      ];  
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-full h-[120px] p-1 rounded-3xl border-[2px]"
                alt={`${name} logo`}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 
