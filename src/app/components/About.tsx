import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="relative p-12 md:p-20 bg-gradient-to-br from-blue-400 to-white text-center overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-teal-500 opacity-50 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-blue-400 opacity-60 animate-float delay-2000"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 animate-pulse">
        About Me
      </h2>
      
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
        Hello! I'm Rubab Fatima, a dedicated and creative{" "}
        <span className="font-semibold text-blue-600">Web Developer</span> with a
        flair for building interactive and visually engaging web applications.
        My journey in web development began with a strong foundation in{" "}
        <span className="font-semibold text-teal-500">HTML, CSS, JavaScript, React.js and TypeScript</span>,
        and I’m continually expanding my skill set to bring innovative solutions
        to life. Currently, I'm diving into{" "}
        <span className="font-semibold text-blue-600">Next.js</span> to deepen
        my knowledge and explore advanced front-end possibilities.
      </p>

      {/* Button Link to Projects */}
      <Link href="#projects" passHref>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
          View My Projects
        </button>
      </Link>
    </section>
  );
};

export default About;
