import { useState } from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

const Tech = () => {
  const [bioLength, setBioLength] = useState("medium");

  const bios = {
    short: "I'm Malavika Sajith, a web developer skilled in React and deep learning technologies, always eager to create impactful digital solutions.",
    medium:
      "I'm Malavika Sajith, a passionate web developer with a Master’s in Information Technology and hands-on experience in web development and AI-based projects. I thrive in collaborative environments, constantly enhancing my skills to build innovative solutions.",
    long:
      "Hello! I am Malavika Sajith, a passionate web developer with hands-on experience in building user-centric web solutions. My journey in tech began with a strong academic foundation, earning a Master’s degree in Information Technology from SRH University Heidelberg and a Bachelor's in Electronics and Communication. My professional experiences, including a graduate engineering role at Cognizant, taught me the importance of collaboration and problem-solving in fast-paced environments. I further honed my skills during a hands-on training program at Kreativestorm, where I gained practical experience and learned to thrive in team settings. With expertise in technologies like React, Node.js, and deep learning frameworks, I continually expand my knowledge to stay up-to-date with the latest trends. From creating dynamic web projects to diving into AI-driven solutions, I am driven by curiosity and a commitment to delivering impactful results. Let’s connect and create something extraordinary together!",
  };

  const skills = [
    { icon: BiLogoHtml5, name: "HTML5", color: "text-red-500" },
    { icon: BiLogoCss3, name: "CSS3", color: "text-sky-600" },
    { icon: BiLogoJavascript, name: "JavaScript", color: "text-yellow-600" },
    { icon: BiLogoReact, name: "React", color: "text-sky-600" },
    { icon: BiLogoTailwindCss, name: "TailwindCSS", color: "text-sky-600" },
    { icon: BiLogoNodejs, name: "Node.js", color: "text-green-600" },
    { icon: BiLogoPython, name: "Python", color: "text-sky-600" },
    { icon: BiLogoMongodb, name: "MongoDB", color: "text-green-700" },
  ];

  return (
    <div
      id="tech"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-6 py-16"
    >
      {/* About Me Section */}
      <h1 className="text-4xl font-light text-black md:text-6xl">About Me</h1>

      <div className="flex flex-col items-center gap-8">
        {/* Bio Selector */}
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              bioLength === "short" ? "bg-amber-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setBioLength("short")}
          >
            Short
          </button>
          <button
            className={`px-4 py-2 rounded ${
              bioLength === "medium" ? "bg-amber-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setBioLength("medium")}
          >
            Medium
          </button>
          <button
            className={`px-4 py-2 rounded ${
              bioLength === "long" ? "bg-amber-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setBioLength("long")}
          >
            Long
          </button>
        </div>

        {/* Bio Text */}
        <p className="text-sm md:text-base text-pretty text-amber-800 max-w-3xl text-center">
          {bios[bioLength]}
        </p>
      </div>

      {/* Skills Section */}
      <h1 className="text-4xl font-light text-black md:text-6xl">Skills</h1>
      <div className="grid grid-cols-2 gap-8 p-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
          >
            <skill.icon className={`text-[80px] sm:text-[100px] ${skill.color}`} />
            <p className="text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;


