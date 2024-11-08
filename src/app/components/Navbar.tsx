import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">

      <div className="text-white text-xl font-bold">
        Rubab Fatima
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link href="#home" className="text-white hover:text-blue-300 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-white hover:text-blue-300 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="text-white hover:text-blue-300 transition-colors duration-300">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="text-white hover:text-blue-300 transition-colors duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
