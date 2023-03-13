import React from "react";

interface HeaderProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  logoSrc: string;
  onLogout: () => void;
}

export default function Header(props: HeaderProps) {
  const { onSearch, logoSrc, onLogout } = props;

  return (
    <header className="bg-gray-50 flex justify-between items-center py-3 px-4">
      <div className="md:flex-none">
        <input type="text" placeholder="Search..." onChange={onSearch} />
      </div>
      <div className="md:flex-none">
        <img src={logoSrc} alt="" />
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <div className="flex">
          <button className="ml-4" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
