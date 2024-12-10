
import React from "react";
import './about.css';  

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-title">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="hero-btn-container">
          <button className="hero-btn">
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="story-info">
          <h1 className="story-title">It started with a small idea</h1>
          <p className="story-description">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="story-btn">
            View Collection
          </button>
        </div>
        <div className="story-img-container">
          <img
            src="/images/About main.png"
            alt="About main"
            className="story-img"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section">
        <img
          src="/images/About second.png"
          alt="Service"
          className="service-img"
        />
        <div className="service-info">
          <h1 className="service-title">
            Our service isn’t just personal, it’s actually hyper-personally exquisite
          </h1>
          <p className="service-description">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="service-btn">Get in Touch</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h1 className="features-title">What makes our brand different</h1>
        <div className="features-list">
          {[
            {
              img: "/images/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div key={index} className="feature-item">
              <img
                src={item.img}
                alt={item.title}
                className="feature-img"
              />
              <h1 className="feature-title">{item.title}</h1>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-info">
          <h1 className="newsletter-title">Join the club and get the benefits</h1>
          <p className="newsletter-desc">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="newsletter-form">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
