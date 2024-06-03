import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './services.css';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignupClick = () => {
    console.log('Admin Login clicked');
  };

  const handleLoginClick = () => {
    console.log('Customer Login clicked');
  };

  return (
   
  
    <div className='wes'>
      <h2>SERVICES</h2>
    <div className="container">
      <section className="ca" id="services">
        <div>
          <h2 className='md'>Banking Services</h2>
          <div className="service-buttons">
            <br />
           
            <button className="btn btn-primary login-btn" onClick={toggleMenu}><p className='op'>Loan Services&#9662;</p></button>
            {isMenuOpen && (
              <div className="cards">
                <div className="service-list">
                  <a href="#SignUp" className="dropdown-ite" onClick={handleSignupClick}> </a>
                  <Link to='/Loanservics'><a><button className='mop'>Personal loan</button></a></Link><br/>
                  <Link to='/Loanservice'><button className='mop'>Education loan</button></Link>

                </div>
              </div>
            )}
          </div>
        </div>

        
      </section>


      <section className='we'>
     
        <h2 className='md'>Newsletter</h2>
        <div className="newsletter-content">
          <div className="newsletter-scroll">
            <div className="newsletter-content-inner">
              <span className="scrolling-text">
                Banks play a fundamental role in the global economy by facilitating financial transactions, providing loans, managing deposits, and offering various financial services. Banks play a fundamental role in the global economy by facilitating financial transactions, providing loans, managing deposits, and offering various financial services.
              </span>
              <span className="scrolling-text">
                Banks play a fundamental role in the global economy by facilitating financial transactions, providing loans, managing deposits,
                and offering various financial services. Banks play a fundamental role in the global economy 
                by facilitating financial transactions, providing loans, managing deposits, and offering various 
                financial services. Banks play a fundamental role in the global economy by facilitating financial 
                transactions, providing loans, managing deposits, and offering various financial services.
                Banks play a fundamental role in the global economy by facilitating financial transactions,
                providing loans, managing deposits, and offering various financial services.
                Banks play a fundamental role in the global economy by facilitating financial transactions, providing loans, managing deposits,
                and offering various financial services. Banks play a fundamental role in the global economy 
                by facilitating financial transactions, providing loans, managing deposits, and offering various 
                financial services. Banks play a fundamental role in the global economy by facilitating financial 
                transactions, providing loans, managing deposits, and offering various financial services.
                Banks play a fundamental role in the global economy by facilitating financial transactions,
                providing loans, managing deposits, and offering various financial services.
              </span>
            </div>
          </div>
        </div>
    
    </section>
    </div>
    </div>
   
    
  );
}


export default Services;
