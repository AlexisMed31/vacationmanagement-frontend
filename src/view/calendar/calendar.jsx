import './newcalendar.css';

function CalendarView() {
  const days = () => {
    const totaldays = 31;
    

    for (let i = 0; i <= totaldays; i++) {
      return (
        <div className = 'days'>
          {i}
        </div>
      );
    }
  }
  return (
    <div className="main-container">
      <div className="main-container-left">
        <div className='container-left-year'>
          <div className='year-last'>
            2023
          </div>
          <div className='year-current'>
            JAN, 2024
          </div>
          <div className='year-next'>
            2025
          </div>
        </div>
        <div className='container-left-week'>
          <div className='week-sun'>
            SUN
          </div>
          <div className='week-mon'>
            MON
          </div>
          <div className='week-tue'>
            TUE
          </div>
          <div className='week-wed'>
            WED
          </div>
          <div className='week-thurs'>
            THUR
          </div>
          <div className='week-fri'>
            FRI
          </div>
          <div className='week-sat'>
            SAT
          </div>
        </div>
        <div className='container-left-days'>
          {days()}
        </div>
      </div>
      <div className="main-container-right">
      </div>
    </div>
  );
}

export default CalendarView;