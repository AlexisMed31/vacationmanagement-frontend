import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import Login from './view/signin/Login';
import CalendarScreen from './view/calendar/CalendarScreen';
import CalendarView from './view/calendar/calendar';
import Report from './view/report/report';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  function handleLogin(userData) {
    setCookie('user', userData, { path: '/' });
  }

  function handleLogout() {
    removeCookie('user', { path: '/' }); // Deletes the 'user' cookie
    console.log('User logged out');
  }

  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route path="/calendar" element={<CalendarScreen cookie={cookies.user} handleLogout={handleLogout} />} />
          <Route path='calendarnew' element={<CalendarView />} />
          <Route path='report' element={<Report handleLogout={handleLogout} />} />
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;
