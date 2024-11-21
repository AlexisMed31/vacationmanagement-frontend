<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CalendarScreen from './CalendarScreen';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calendar" element={<CalendarScreen />} />
      </Routes>
    </Router>
=======
import logo from './logo.svg';
import './App.css';
import Signin from './view/signinView/signin';

function App() {
  return (
    <Signin />
>>>>>>> 92f499abb30149b938e08c46644aa62253530ee5
  );
}

export default App;
