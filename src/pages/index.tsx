import React from "react";
import Header from "../../components/header/header";
import Link from 'next/link';

export default function Home() {
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
  }

  function handleLogout() {
    console.log("bye bye");
  }

  const logoSrc = "evhome-main/picture/logo.png"
  
  return (
    <div>
      <Header onSearch={handleSearch} logoSrc={logoSrc} onLogout={handleLogout} />
      <Link href="/login"></Link>
    </div>
  );
}
