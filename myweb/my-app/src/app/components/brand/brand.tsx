import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import './Brand.css'; // Assuming styles are in Brand.css

const Brand = () => {
  return (
    <>
      <section>
        <div className="brand-container">
          {/* Title */}
          <h1 className="brand-title">What makes our brand different</h1>

          {/* Features */}
          <div className="brand-features">
            {/* Feature 1 */}
            <div className="brand-feature">
              <div className="feature-icon">
              <TbTruckDelivery size={30}  />
              </div>
              <p className="feature-heading">Next day as standard</p>
              <p className="feature-description">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="brand-feature">
            <div className="feature-icon">
              <IoIosCheckmarkCircleOutline size={30}  />
              </div>
              <p className="feature-heading">Made by true artisans</p>
              <p className="feature-description">
                Hand-crafted goods made with real passion and craftsmanship.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="brand-feature">
            <div className="feature-icon">
              <MdOutlinePriceChange size={30}  />
              </div>
              <p className="feature-heading">Unbeatable prices</p>
              <p className="feature-description">
                For our material and quality, you won&apos;t find better prices anywhere.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="brand-feature">
            <div className="feature-icon">
              <LuSprout size={30}  />
              </div>
              <p className="feature-heading">Recycled packaging</p>
              <p className="feature-description">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
