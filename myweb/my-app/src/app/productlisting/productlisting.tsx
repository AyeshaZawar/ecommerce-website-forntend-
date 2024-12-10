import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import './productlisting.css'; // Import the CSS file

const Productlisting = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <>
      <section className="product-listing-container">
        <div>
          {/* Main Product Section */}
          <div className="product-main-section">
            <div className="product-image-container">
              <Image
                src={'/images/Image Left.png'}
                height={800}
                width={800}
                alt="chair"
                className="product-image"
              />
            </div>
            <div className="product-details-container">
              <div>
                <p className="product-title">The Dandy Chair</p>
                <p className="product-price">$250</p>
              </div>
              <div className="product-description">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="product-list">
                  <ul>
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div className="product-dimensions">
                  <h1 className="font-semibold">Dimensions</h1>
                  <div className="product-dimension">
                    <h1>Height</h1>
                    <p>110cm</p>
                  </div>
                  <div className="product-dimension">
                    <h1>Width</h1>
                    <p>75cm</p>
                  </div>
                  <div className="product-dimension">
                    <h1>Depth</h1>
                    <p>50cm</p>
                  </div>
                </div>
                <div className="product-amount">
                  <h1>Amount:</h1>
                  <button className="amount-btn">
                    <span>+</span> 1 <span>-</span>
                  </button>
                </div>
                <button className="add-to-cart-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="suggestions-section">
            <h1 className="suggestions-title">You might also like</h1>
            <div className="suggestions-grid">
              {['chair', 'vase', 'silky', 'lamp'].map((item, idx) => (
                <div key={idx} className="suggestion-item">
                  <Image
                    src={`/images/${item}.png`}
                    height={700}
                    width={700}
                    alt={item}
                    className="suggestion-image"
                  />
                  <div className="suggestion-item-title">
                    <p>{item === 'chair' ? 'The Dandy Chair' : `The ${item}`}</p>
                    <p>${item === 'chair' ? 250 : item === 'vase' ? 155 : 125}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View Collection Button */}
          <div className="view-collection-btn">
            <button>View collection</button>
          </div>

          {/* Features Section */}
          <div className="features-section">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="feature-item">
                  <div className="feature-item-icon">
                  <Icon size={30}  />
                  </div>
                  <p className="feature-item-title">{feature.title}</p>
                  <p className="feature-item-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Productlisting;
