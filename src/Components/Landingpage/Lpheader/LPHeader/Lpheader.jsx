import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Headers = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
     "https://media.istockphoto.com/id/1488308267/photo/engineer-working-with-database-for-digital-data-design-or-cyberspace-network-and-connection.jpg?s=612x612&w=0&k=20&c=2uL7YiG8eXgNaf8Oaseiz7yXZaGi6p_JVGWp-QPUhrA=",
    "https://media.istockphoto.com/id/1480476353/photo/human-life-with-artificial-intelligence-data-in-computer-technology.jpg?s=612x612&w=0&k=20&c=Rywq_PNqPTkGlEUGW-RAJ50dbGQL5lT_p0daw5_Lqus=",
    "https://t4.ftcdn.net/jpg/01/27/79/81/240_F_127798119_uBtfKpHtT6cHsZ6OWo8envOz0m4eiXFS.jpg"
  
  
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <header className="header-section">
        <div className="logo">
          <img src="https://www.99corporates.com/CompanyLogo/U72200KA2017PTC104914.jpg" alt="Icon" />
          <div className="bank-info">
            <h1>Research and Development</h1>
            <h2>Everything is theoretically imposible</h2>
          </div>
        </div>
        <nav className="navigation-menu">
          <ul>
            <li><Link to="/" className="nav-link">HOME</Link></li>
           
            <li><a href="#about" className="nav-link">ABOUT US</a></li>
            <li><a href="#contact" className="nav-link">CONTACT US</a></li>
            
          </ul>
        </nav>
<div>
  <Link to='/dashboard'>
  <h4>List Your Business</h4></Link>
</div>
        <button className='buttons-container'>
          <a href='/login' target='_blank' ><span>Login</span></a>&nbsp;
          |
          &nbsp; <a href='/signup' target='_blank'><span>Signup</span></a>
        </button>
      </header>
      <div className='pom'>
        <section className="home-section">
          {images.map((image, index) => (
            <div key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
              <img src={image} alt={`Description of image ${index}`} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Headers;
