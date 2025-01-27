import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-16 text-center bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-[length:200%_200%] animate-gradient text-white"
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8 animate-pulse">
        Get in Touch
      </h2>

      <div className="space-y-6 text-lg">
        {/* Email Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaEnvelope className="text-3xl" />
          <a
            href="mailto:fati061022@gmail.com"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            fati061022@gmail.com
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaLinkedin className="text-3xl" />
          <a
            href="https://www.linkedin.com/in/rubab-fatima-3636242b5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* GitHub Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaGithub className="text-3xl" />
          <a
            href="https://github.com/rubii22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
