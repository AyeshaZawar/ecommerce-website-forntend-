
import React from "react";
import Header from "../components/header/Header";
import './cart.css';



const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product Section */}
          <div className="product-section">
            <h1 className="product-header">Product</h1>
            <div className="product-item">
              <div className="product-image-container">
                <img
                  src="/images/Product Image.png"
                  alt="Product 1"
                  className="product-image"
                />
                <div className="product-details">
                  <h1 className="product-title">Graystone vase</h1>
                  <p className="product-description">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="product-price">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="quantity-section">
                <h1 className="quantity-label">Quantity</h1>
                <p className="quantity-value">1</p>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image-container">
                <img
                  src="/images/Product Image 2.png"
                  alt="Product 2"
                  className="product-image"
                />
                <div className="product-details">
                  <h1 className="product-title">Basic white vase</h1>
                  <p className="product-description">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="product-price">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="quantity-section">
                <h1 className="quantity-label">Quantity</h1>
                <p className="quantity-value">1</p>
              </div>
            </div>
          </div>

          {/* Total Section */}
          <div className="total-section">
            <h1 className="total-header">Total</h1>
            <p className="total-price">£85</p>
            <p className="total-discount">£85</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="subtotal-section">
          <h1 className="subtotal-header">Subtotal</h1>
          <h1 className="subtotal-price">£210</h1>
          <p className="subtotal-info">Taxes and shipping are calculated at checkout</p>
          <button className="checkout-btn">Go to checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
