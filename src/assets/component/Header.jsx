// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent text-white px-6 py-4 fixed top-0 left-0 w-full h-16 z-20 backdrop-blur-xl rounded-lg">
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded absolute right-10">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
