import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <p className="text-sm">Thanks for visiting Lumiq.ai </p>
        <p className="text-sm">&copy; {new Date().getFullYear()} lumiq.in</p>
      </div>
    </footer>
  );
};

export default Footer;
