import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/signin/Login';
import CalendarScreen from './view/calendar/CalendarScreen';
import CalendarView from './view/calendar/calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path='calendarnew' element={<CalendarView />} />
      </Routes>
    </Router>
  );
}

export default App;
