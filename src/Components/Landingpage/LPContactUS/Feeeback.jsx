import React, { useState } from 'react';
import './Feedback.css';
const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <footer className="foot" id="contact">
      <h2 className='dos'>FEEDBACK</h2>
         <div className="co">
     
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <label htmlFor="name">NAME</label>
         <input
           type="text"
           id="name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder="Enter your name"
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">EMAIL ADDRESS</label>
         <input
           type="email"
           id="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Enter your email"
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="message">Feedback</label>
         <textarea
           id="message"
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           placeholder="Enter your feedback"
           required
         />
       </div>
       <button type="submit">Send Message</button>
     </form>
   
    
   </div>
    </footer>
  );
};

export default Feedback;
