import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './newcalendar.css';

function CalendarScreen() {
  const [date, setDate] = useState(new Date()); // Estado de la fecha actual

  // Función para manejar el cambio de fecha
  const handleDateChange = (newDate) => {
    setDate(newDate); // Actualiza el estado con la nueva fecha
  };

  return (
    <div className='main-container'>
      <div className="calendar-container">
        {}
      
        {/* Componente Calendar con las flechas de navegación */}
        <Calendar
          onChange={handleDateChange}  // Actualiza la fecha al hacer clic en un día
          value={date}  // Establece el valor actual del calendario
          next2Label={null} // Elimina la flecha de navegación del mes siguiente
          prev2Label={null} // Elimina la flecha de navegación del mes anterior
          showNeighboringMonth={false} // Evita mostrar el mes anterior o siguiente parcialmente
        />
      </div>
      <div className='info-container-right'>
        <h1>Information</h1>
      </div>
    </div>

  );
}

export default CalendarScreen;
