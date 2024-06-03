import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      const mapContainer = document.querySelector('.map-container');
      const mapPosition = mapContainer.getBoundingClientRect().top;

      if (mapPosition < window.innerHeight * 0.8) {
        mapContainer.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="footer-container">
        {showButton && (
          <button onClick={scrollToTop} className="scroll-top-button">
            <div className='pova'>ScrollingUp</div>
          </button>
        )}
      </div>
      <div className="map-container">
        <iframe
          title="Map"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6376769563714!2d80.26923311535841!3d13.082680990686335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266df8547f1e3%3A0x4d651a11a68b308a!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2suk!4v1649238354764!5m2!1sen!2suk"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
