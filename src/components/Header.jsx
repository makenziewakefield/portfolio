import React, { useState, useEffect } from "react";
import "../styles/Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header-section ${isScrolled ? "header--scrolled" : ""}`}>
      <h1 className="header-name">Makenzie Wakefield</h1>
    </header>
  );
};

export default Header;
