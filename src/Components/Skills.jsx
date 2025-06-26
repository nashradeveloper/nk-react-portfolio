import React from "react";
import html from '../assets/html-logo.webp'
import css from '../assets/css.webp'
import js from '../assets/js.png'
import react from '../assets/react.webp'
import mongo from '../assets/mongodb.webp'
import node from '../assets/node-js.webp'
import tailwind from '../assets/tailwind-css.png'
import wordpress from '../assets/wordpress.png'

const techStack = [
  { name: "HTML5", src: html },
  { name: "CSS3", src: css },
  { name: "JavaScript", src: js},
  { name: "React", src: react },
  { name: "Next.js", src: tailwind },
  { name: "Node.js", src: node },
  { name: "Tailwind", src: mongo },
  { name: "MongoDB", src: wordpress },
];

const Skill = () => {
  return (
    <div className="text-white py-12 px-4 sm:px-8 md:px-16 h-[500px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Tech Icons */}
        <div className="col-span-3 grid grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#1e293b] p-4 rounded-lg flex items-center justify-center shadow-md hover:rotate-12 transition-all"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-32 w-32 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="col-span-2 flex flex-col items-center justify-center text-center bg-[#1e293b] rounded-lg p-6 shadow-lg">
          <h2 className="text-5xl font-bold mb-2">1.5</h2>
          <p className="text-xl mb-4">Years Experience Working</p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-4 rounded-lg hover:bg-yellow-300 transition">
            DOWNLOAD MY CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
