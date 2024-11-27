import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/calendarnew');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">SIGN IN</h1>
        <form>
          <div className="input-container">
            <label htmlFor="username"></label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="input-container">
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="submit-container">
            <button type="button"  className="login-button" onClick={handleSubmit}>
              SIGN IN
            </button>
          </div>
        </form>
      </div>
      <div className="background"></div>
    </div>
  );
}

export default Login;