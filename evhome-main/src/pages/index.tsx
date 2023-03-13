import React from "react";
import Header from "../../components/header";

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
    </div>
  );
}
