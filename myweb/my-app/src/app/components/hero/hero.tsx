import Image from 'next/image';
import React from 'react';
import './hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-left">
            <div>
              <h1 className="hero-title">
                The furniture brand for the future with <br /> the timeless designs
              </h1>
              <div className="hero-button-container">
                <button className="hero-button">
                  View collection
                </button>
              </div>
            </div>

            <div className="hero-description">
              <p className="hero-text">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand
                <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                <br /> using modern web technologies.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <Image src={'/images/rightt.png'} width={400} height={400} alt="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
