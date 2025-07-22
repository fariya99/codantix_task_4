import React from 'react';

const CustomButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-gradient-to-r from-blue-600 to-indigo-700 
        text-white px-8 py-3 rounded-lg 
        shadow-lg hover:from-indigo-700 hover:to-blue-600 
        transform hover:scale-105 active:scale-95 
        transition duration-300 ease-in-out
        font-semibold
        focus:outline-none focus:ring-4 focus:ring-indigo-300
      "
    >
      {label}
    </button>
  );
};

export default CustomButton;

