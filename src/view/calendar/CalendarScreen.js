import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CalendarScreen({ cookie, handleLogout }) {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date()); // Estado de la fecha actual
  const [selectedDate, setSelectedDate] = useState('');
  const [click, setClick] = useState(0);
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const [employee, setEmployee] = useState(cookie || {});
  const [days, setDays] = useState([{}]);

  useEffect(() => {
    if (cookie.daysid) {
      getDateData(cookie.daysid);
    }
  }, []);

  const getDateData = async (dayid) => {
    try {
      const vacationDaysURL = `http://localhost:4000/days/${dayid}`;
      const response = await axios.get(vacationDaysURL);
      const dayData = response.data;
      setDays(dayData);
    } catch (error) {
      console.error(error);
    }
  }
  // Función para manejar el cambio de fecha
  const handleDateChange = (newDate) => {
    setDate(newDate); // Actualiza el estado con la nueva fecha
  };

  const handleDayClick = (day) => {
    // Aquí puedes manejar el clic en un dia
    let newselectedDate = format(day, 'dd/MM/yyyy');
    if (click === 0) {
      setMinDate(newselectedDate);
      setClick(1);
    } else {
      setMaxDate(newselectedDate);
      setClick(0);
    }
    setSelectedDate(newselectedDate);
  };

  const handleSubmit = () => {
    handleLogout();
    navigate('/');
  };
  return (
    <div className='main'>
      <div className="calendar-container">
        {}
      
        {/* Componente Calendar con las flechas de navegación */}
        <Calendar
          onChange={handleDateChange}  // Actualiza la fecha al hacer clic en un día
          onClickDay={handleDayClick} // Actualiza la fecha al hacer clic en un dia
          selectRange={true}
          value={date}  // Establece el valor actual del calendario
          next2Label={null} // Elimina la flecha de navegación del mes siguiente
          prev2Label={null} // Elimina la flecha de navegación del mes anterior
          showNeighboringMonth={false} // Evita mostrar el mes anterior o siguiente parcialmente
        />
        <div className='logOut-button'>
          <button type="button" onClick={handleSubmit} >EXIT</button>
        </div>
      </div>
      <div className='info-container-right'>
        <div className='employee-info'>
          <div className='employee'>
            <p className='employee-name'>{employee.name}</p>
            <p className='employee-role'>Manager</p>
            <p className='employee-id'>{`ID - ${employee.employeeid}`}</p>
            <p className='employee-username'>{}</p>
            <div className='employee-linebreak'></div>
          </div>  
        </div>
        <div className='employee-vacation-container'>
          <div className='vacation-days'>
            <div className='employee-vacation-name'>Total Days:</div>
            <div className='employee-vacation-amount'>{days.totaldays}</div>
          </div>
          <div className='vacation-days'>
            <div className='employee-vacation-name'>Days Taken:</div>
            <div className='employee-vacation-amount'>{days.daystaken}</div>
          </div>
          <div className='vacation-days min-day'>
            <div className='employee-vacation-name'>Start Day:</div>
            <div className='employee-vacation-amount'>{minDate}</div>
          </div>
          <div className='vacation-days max-day'>
            <div className='employee-vacation-name'>End Day:</div>
            <div className='employee-vacation-amount'>{maxDate}</div>
          </div>
          <div className='vacation-days'>
            <div className='vacation-linebreak'></div>
          </div>
        </div>
        <div className='day-info'>
          <div className='day-data'>
            <div className='day-name'>
              <div>Day:</div>
              <div className='day-amount'>{selectedDate}</div>
            </div>
          </div>
          <div className='day-data'>
            <div className='day-name'>
              <div>Status:</div>
              <div className='day-amount'>Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CalendarScreen;
