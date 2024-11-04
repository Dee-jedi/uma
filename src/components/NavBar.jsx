import { useState, useEffect, useContext } from 'react';
import SideBar from './SideBar';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import logo from './../assets/Logo.png';
import NavContext from './context/NavContext';

const NavBar = () => {
  const { links, isMenuOpen, toggleSidebar, closeSidebar } =
    useContext(NavContext);

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-white shadow-sm shadow-gray-200">
      <img
        src={logo}
        className="sm:h-[38px] h-[32px] sm:w-[100px] w-[76px] xl:h-[48px] xl:w-[120px]"
        alt="Logo"
      />

      <ul
        className={`sm:flex hidden gap-6 md:gap-12 lg:gap-14 text-[#222] ${
          isMenuOpen ? 'blur' : ''
        }`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-[#7b10c3] transition duration-300 ease-in-out"
          >
            <a href={link.href} className="xl:text-lg">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`sm:flex hidden gap-4 md:gap-10 ${isMenuOpen ? 'blur' : ''}`}
      >
        <div className="flex items-center lg:gap-3 gap-2 text-gray-700">
          <FaGlobe className="text-[#7b10c3] xl:text-lg" />
          <p className="xl:text-lg">English</p>
        </div>
        <div className="border px-2 py-[2px] rounded-md border-gray-300 hover:bg-[#f7e5f1] hover:border-[#d21887] transition duration-200">
          <p className="cursor-pointer font-semibold text-gray-700 hover:text-[#d21887] xl:text-lg">
            Sign up
          </p>
        </div>
      </div>

      <div className="mr-2 sm:hidden">
        <button onClick={toggleSidebar}>
          {isMenuOpen ? <FaTimes className="text-transparent" /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <>
            <div
              className={`sidebar-overlay ${isMenuOpen ? 'visible' : ''}`}
              onClick={closeSidebar}
            />
            <SideBar />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
