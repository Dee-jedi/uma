import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import NavContext from './context/NavContext';

const SideBar = () => {
  const { links, closeSidebar } = useContext(NavContext);

  return (
    <aside className="fixed top-0 left-0 h-full w-[220px] bg-white shadow-xl z-50 transition-transform transform animate-slide-in rounded-r-2xl">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Menu</h2>
        <button
          onClick={closeSidebar}
          className="text-gray-500 hover:text-[#d21887] transition-colors duration-200"
        >
          <FaArrowLeft size={18} />
        </button>
      </div>
      <ul className="flex flex-col p-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="py-2 text-lg text-gray-700 hover:bg-[#f7e5f1] rounded transition duration-200"
          >
            <a
              href={link.href}
              onClick={closeSidebar}
              className="block p-2 rounded hover:text-[#7b10c3]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
