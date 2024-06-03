import React from 'react';

import MapSection from '../LpFooter/Footer';
import ContactSection from '../LPContactUS/contactus';
import Feedback from '../LPContactUS/Feeeback';
import Header from './LPHeader/Lpheader';
import AboutUS from '../LpAboutUs/Aboutus';



const LandingPage = () => {
  return (
    
      <div className="App">
        <Header/>

        <AboutUS/>
        <ContactSection/>
  
        <MapSection/>
       
      </div>  
  );
}
export default LandingPage;