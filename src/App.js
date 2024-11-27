import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/signin/Login';
import CalendarScreen from './view/calendar/CalendarScreen';
import CalendarView from './view/calendar/calendar';
import Signin from './view/signin/signin';
//import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path='calendarnew' element={<CalendarView />} />
      </Routes>
    </Router>
  );
}

export default App;
