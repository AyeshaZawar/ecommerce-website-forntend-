import Image from 'next/image'
import React from 'react'
import './touch.css'; // Import the CSS file

const Touch = () => {
  return (
    <section>
      <div className="touch-container">
        <div className="touch-content">
          <div className="text-content">
            <div>
              <h1 className="title">From a studio in London to a global brand with <br /> over 400 outlets</h1>
              <h1 className="subtitle">When we started Avion, the idea was simple. Make high-quality furniture <br />
                affordable and available for the mass market.</h1>
              <h1 className="description">Handmade and lovingly crafted furniture and homeware is what we live, <br />
                breathe, and design, so our Chelsea boutique became the hotbed for the <br />
                London interior design community.</h1>
            </div>
            <div className="button-container">
              <button className="get-in-touch-button">Get in touch</button>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={'/images/blend.png'}
              height={800}
              width={800}
              alt="chair"
              className="touch-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Touch;
