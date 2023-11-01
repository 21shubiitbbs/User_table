import React from 'react';
import { Link } from "react-router-dom";
const Nv = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">Lumiq Interns 2023</a>
        </div>
        <div className="flex items-center">
          <a href="/" className="text-white mx-4 hover:text-yellow-200">Home</a>
          <a href="#" className="text-white mx-4 hover:text-yellow-200">About</a>
          <a href="#" className="text-white mx-4 hover:text-yellow-200">Services</a>
          <a href="#" className="text-white mx-4 hover:text-yellow-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nv;
