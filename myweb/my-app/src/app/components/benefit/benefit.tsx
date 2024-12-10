import React from 'react';
import './Benefit.css'; 

const Benefit = () => {
  return (
    <>
      <section>
        <div className="benefit-section">
          <div className="benefit-container">
            <h1 className="benefit-title">Join the club and get the benefits</h1>
            <h2 className="benefit-subtitle">
              Sign up for our newsletter and receive exclusive offers on new
              <br /> ranges, sales, pop-up stores, and more.
            </h2>
            <div className="form-container">
              <form action="" className="benefit-form">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="benefit-input"
                />
                <button className="benefit-button">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
