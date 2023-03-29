import React from 'react';
import SidebarLink from './sidebarLink';
import navItems from './sidebarContent';

interface Props {
  header: string;
}

const Sidebar: React.FC<Props> = ({ header }) => {
  return (
    <div className="flex flex-col bg-white-400 text-white w-64 min-h-screen">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-2xl font-semibold">{header}</h1>
      </div>
      <nav className="flex flex-col mt-6">
        {navItems.map((item, index) => (
          <SidebarLink key={index} label={item.label} icon={item.icon} onClick={item.onClick} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
