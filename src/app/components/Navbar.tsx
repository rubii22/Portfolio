'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between fixed top-0 left-0 w-full z-20">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        Rubab Fatima
      </div>

      {/* Hamburger Menu (for mobile screens) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links for Desktop */}
      <ul className="hidden md:flex md:space-x-6 md:items-center md:justify-end w-full">
        <li className="text-center">
          <Link
            href="#home"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#about"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#skills"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Skills
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#projects"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Projects
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#contact"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-blue-500 md:hidden md:flex md:space-x-6 md:items-center md:justify-end`}
      >
        <li className="text-center">
          <Link
            href="#home"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#about"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#skills"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Skills
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#projects"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Projects
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="#contact"
            className="block py-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
