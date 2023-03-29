import React from 'react';

interface SidebarLinkProps {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, icon, onClick }) => {
  return (
    <div
      className="flex items-center justify-start py-2 px-4 w-full hover:bg-yellow-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      <span className="text-lg">{label}</span>
    </div>
  );
};

export default SidebarLink;
