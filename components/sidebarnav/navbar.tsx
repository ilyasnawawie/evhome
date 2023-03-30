import React from 'react';
import NavbarContent from './navbarContent';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="logo.png"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="logo.png"
                alt="Your Company"
              />
            </div>
            <NavbarContent />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
