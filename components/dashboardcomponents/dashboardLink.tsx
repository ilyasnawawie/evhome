import React from 'react';

interface DashboardLinkProps {
  title: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const DashboardLink: React.FC<DashboardLinkProps> = ({ title, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`card-mini-header bg-gray-800 w-full h-full flex items-center justify-center transition-opacity duration-300 ${
        title ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-title text-yellow-300">{title}</div>
    </div>
  );
};

export default DashboardLink;
