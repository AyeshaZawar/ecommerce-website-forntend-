import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import './Footer.css'; // Assuming the styles are in Footer.css

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-sections">
          {/* Menu Section */}
          <div className="footer-section">
            <h1 className="footer-title">Menu</h1>
            <div className="footer-links">
              <h1><Link href="/">New Arrivals</Link></h1>
              <h1><Link href="/">Best sellers</Link></h1>
              <h1><Link href="/">Recently viewed</Link></h1>
              <h1><Link href="/">Popular this week</Link></h1>
              <h1><Link href="/">All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="footer-section">
            <h1 className="footer-title">Categories</h1>
            <div className="footer-links">
              <h1><Link href="/">Crockery</Link></h1>
              <h1><Link href="/">Furniture</Link></h1>
              <h1><Link href="/">Homeware</Link></h1>
              <h1><Link href="/">Plant pots</Link></h1>
              <h1><Link href="/">Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h1 className="footer-title">Our Company</h1>
            <div className="footer-links">
              <h1><Link href="/about">About us</Link></h1>
              <h1><Link href="/">Vacancies</Link></h1>
              <h1><Link href="/">Contact us</Link></h1>
              <h1><Link href="/">Privacy</Link></h1>
              <h1><Link href="/">Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="footer-section">
            <h1 className="footer-title">Join our mailing list</h1>
            <div className="footer-form">
              <input
                type="text"
                placeholder="your@email.com"
                className="footer-input"
              />
              <button className="footer-button">Sign up</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className="footer-icons">
            <Link href="/"><FaLinkedin size={20} /></Link>
            <Link href="/"><FaFacebookSquare size={20} /></Link>
            <Link href="/"><FaInstagram size={20} /></Link>
            <Link href="/"><IoLogoSkype size={20} /></Link>
            <Link href="/"><FaTwitter size={20} /></Link>
            <Link href="/"><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
