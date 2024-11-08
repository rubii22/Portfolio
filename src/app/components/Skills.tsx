import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="relative p-16 md:p-24 text-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-500 to-teal-300 animate-gradientMove opacity-60"></div>

      <h2 className="relative text-4xl md:text-5xl font-extrabold text-white mb-10 animate-pulse z-10">
        Skills
      </h2>

      {/* Skill  with Animation */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-10 mt-10 z-10">
        <div className="flex flex-col items-center group">
          <FaHtml5 className="text-6xl md:text-7xl transition-transform transform group-hover:scale-125 group-hover:rotate-6 text-orange-500" />
          <p className="mt-2 text-xl text-white font-medium">HTML</p>
        </div>
        <div className="flex flex-col items-center group">
          <FaCss3Alt className="text-6xl md:text-7xl transition-transform transform group-hover:scale-125 group-hover:rotate-6 text-blue-500" />
          <p className="mt-2 text-xl text-white font-medium">CSS</p>
        </div>
        <div className="flex flex-col items-center group">
          <FaJs className="text-6xl md:text-7xl transition-transform transform group-hover:scale-125 group-hover:rotate-6 text-yellow-500" />
          <p className="mt-2 text-xl text-white font-medium">JavaScript</p>
        </div>
        <div className="flex flex-col items-center group">
          <SiTypescript className="text-6xl md:text-7xl transition-transform transform group-hover:scale-125 group-hover:rotate-6 text-blue-600" />
          <p className="mt-2 text-xl text-white font-medium">TypeScript</p>
        </div>
        <div className="flex flex-col items-center group">
          <FaReact className="text-6xl md:text-7xl transition-transform transform group-hover:scale-125 group-hover:rotate-6 text-blue-400" />
          <p className="mt-2 text-xl text-white font-medium">React.js</p>
        </div>
        <div className="flex flex-col items-center group">
          <SiNextdotjs className="text-6xl md:text-7xl transition-transform transform group-hover:scale-125 group-hover:rotate-6 text-gray-800" />
          <p className="mt-2 text-xl text-white font-medium">Next.js</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
