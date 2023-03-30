import React from 'react';

interface NavbarLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, isActive, children }) => {
  const linkClassName = `rounded-md px-3 py-2 text-sm font-medium ${
    isActive
      ? 'text-yellow-300 bg-gray-700 hover:text-white'
      : 'text-yellow-300 hover:bg-gray-700 hover:text-white'
  }`;

  return (
    <a href={href} className={linkClassName} aria-current={isActive ? 'page' : undefined}>
      {children}
    </a>
  );
};

export default NavbarLink;
