import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/calendar');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Sign in</h1>
        <form>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="submit-container">
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="background"></div>
    </div>
  );
}

export default Login;