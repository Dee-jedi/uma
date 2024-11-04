import React from 'react';

const Button = ({ name }) => (
  <button className="text-[#9113df] bg-white font-semibold md:text-lg text-sm lg:py-2 lg:px-4 md:px-3 md:py-[5px] md:rounded-lg rounded-md px-1 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    {name}
  </button>
);

export default Button;
