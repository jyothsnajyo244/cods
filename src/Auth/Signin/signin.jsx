import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEnvelopeFill, BsLockFill } from 'react-icons/bs'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/student/login', { email, password });
      if (response.status === 200) {
        const userId = response.data.id; 
        console.log("User ID:", userId); 
        navigate(`/home/${userId}`); 
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error); 
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-2">
            <div className="card-body">
              <img 
                src="data:image/png;base64,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"
                alt="Login" 
                className="img-fluid rounded-circle mb-3" 
                style={{ width: '160px', height: '150px' }} 
              />

              <h3 className="card-title text-center">Vendor Login</h3>

              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">
                    <BsEnvelopeFill /> Email
                  </label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <BsLockFill /> Password
                  </label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              <br/>
              <div className="text-center mt-3">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;