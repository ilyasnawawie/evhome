import React from 'react';

interface HeaderProps {
  logo: string;
  header: string;
}

const Header = ({ logo, header }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <img src={logo} alt="Logo" className="h-20 w-auto" />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{header}</h2>
    </div>
  );
};

export default Header;
