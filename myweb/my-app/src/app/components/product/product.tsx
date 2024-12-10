'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import './product.css'; // Import the CSS file

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/productlisting" page
  };

  return (
    <section>
      <div className='product-container'>
        <h1 className='product-title'>Our popular products</h1>

        {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
        <div className='product-grid'>
          
          {/* Product 1 */}
          <div className='product-item'>
            <Image
              src={'/images/Large.png'}
              height={800}
              width={800}
              alt='sofa'
              className='product-image'
            />
            <div className='product-info'>
              <p className='product-name'>The popular suede sofa</p>
              <p className='product-price'>$980</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className='product-item'>
            <Image
              src={'/images/chair.png'}
              height={800}
              width={800}
              alt='chair'
              className='product-image'
            />
            <div className='product-info'>
              <p className='product-name'>The Dandy chair</p>
              <p className='product-price'>$250</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className='product-item'>
            <Image
              src={'/images/chair1.png'}
              height={900}
              width={900}
              alt='chair'
              className='product-image'
            />
            <div className='product-info'>
              <p className='product-name'>The Dandy chair</p>
              <p className='product-price'>$250</p>
            </div>
          </div>

        </div>

        {/* View Collection Button */}
        <div className='view-button-container'>
          <button className='view-button' onClick={handleNavigation}>
            View products
          </button>
        </div>
      </div>
    </section>
  )
}

export default Product;
