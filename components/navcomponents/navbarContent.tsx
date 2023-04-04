import React from 'react';
import NavbarLink from './navbarLink';

const NavbarContent: React.FC = () => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <NavbarLink href="#" isActive>
          Dashboard
        </NavbarLink>
        <NavbarLink href="#">Settings</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Profile</NavbarLink>
      </div>
    </div>
  );
};

export default NavbarContent;
