import Image from 'next/image';
import React from 'react';
import './Ceramic.css'; 
const Ceramics = () => {
  return (
    <>
      <section>
        <div className="ceramics-container">
          {/* Title */}
          <h1 className="ceramics-title">New Ceramics</h1>

          {/* Product Items */}
          <div className="ceramics-grid">
            {/* Product 1 */}
            <div className="ceramics-item">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="chair"
                className="ceramics-image"
              />
              <div className="ceramics-info">
                <p className="ceramics-name">The Dendy Chair</p>
                <p className="ceramics-price">$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="ceramics-item">
              <Image
                src={'/images/vase.png'}
                height={700}
                width={700}
                alt="vase"
                className="ceramics-image"
              />
              <div className="ceramics-info">
                <p className="ceramics-name">Rustic VaseSet</p>
                <p className="ceramics-price">$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="ceramics-item">
              <Image
                src={'/images/silky.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="ceramics-image"
              />
              <div className="ceramics-info">
                <p className="ceramics-name">The Silky Vase</p>
                <p className="ceramics-price">$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="ceramics-item">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="lamp"
                className="ceramics-image"
              />
              <div className="ceramics-info">
                <p className="ceramics-name">The Lucky Lamp</p>
                <p className="ceramics-price">$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="ceramics-button-container">
            <button className="ceramics-button">View collection</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceramics;
