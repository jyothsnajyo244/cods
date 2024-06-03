import React, { useState } from 'react';
import './cont.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <footer className="foo" id="contact">
      <div>
       
      <div>
        <h2 className='dc'>CONTACT US</h2>
        <p className='do'>If you're looking for a any questions approach, I recommend using this one<br/> from IMPACT's Contactus: </p>
        <div className="office-info">
          <div className='uv'>
            <p className='rol'>Email:-
            <a href="mailto:support@researchanddevelopment.com"> support@researchanddevelopment.com</a></p>
          </div>
          <div className='uv'>
           <p className='rol'>Phone:-<a href="tel:+1234567890"> +1234567890</a></p>
          </div>
        
          <div className='uv'>
           <p className='rol'>Address:-<a href="tel:+1234567890"> researchanddevelopment,Chennai,India</a></p>
          </div>
          
        </div>
      </div>
      </div>
    </footer>
  );
};

export default ContactSection;
