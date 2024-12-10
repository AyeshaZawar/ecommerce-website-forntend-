'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';
import './header.css'; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      {/* Top Section */}
      <div className="header-top">
        {/* Search Icon for Large Screens (Tablet and above) */}
        <div className="search-icon">
          <CiSearch size={25} color="#2A254B" />
        </div>
        {/* Cart and Contact Icons for Large Screens */}
        {/* Logo */}
        <h1 className="logo">Avion</h1>
        <div className="cart-contact-icons">
          <Link href="/Cart">
            <IoCartOutline size={25} color="#2A254B" />
          </Link>
          <IoIosContact size={25} color="#2A254B" />
        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <CiSearch size={25} color="#2A254B" />
          <button className="menu-button">
            {!menuOpen ? <IoMenu /> : <IoClose />}
          </button>
        </div>
      </div>
        </div>
      <hr />
      {/* Mobile Navigation Links */}
      <header className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {/* Close Button in Mobile Menu */}
        {menuOpen && (
          <div className="close-button">
            <button className="menu-close" onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>
        )}
        <ul className="mobile-nav">
          {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item) => (
            <li key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
