import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../index.css';

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let userData;
  const URL = 'http://localhost:4000/employee/login';

  const handleSubmit = async () => {
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }
    console.log(username);
    console.log(password);
    try{
      const res = await axios.post(URL, { username, password });
      const data = res.data;
      userData = data;
      console.log(res.data);
      if (userData.username !== username) {
        alert('Login failed. Please try again.');
        return;
      }
      handleLogin(userData);
      navigate('/calendar');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };


  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">SIGN IN</h1>
        <form>
          <div className="input-container">
            <label htmlFor="username"></label>
            <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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