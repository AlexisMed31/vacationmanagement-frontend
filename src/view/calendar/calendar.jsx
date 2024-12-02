import { eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, parseISO, set, startOfToday, getDate, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday } from 'date-fns';
import './newcalendar.css';
import { useState } from 'react';

function CalendarView() {

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM'))
  let [daysInMonth, setDaysInMonth] = useState(format(today, 'MMM-yyyy')) //used to get days from current month
  let [currentyear, setCurrentYear] = useState(format(today, 'yyyy'))
  let [lastYear, setLastYear] = useState(format(today, 'yyyy'))
  let [nextYear, setNextYear] = useState(format(today, 'yyyy'))
  let firstDayCurrentMonth = parse(daysInMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })
  // console.log(days.at(0))

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function handleNextYear() {
    handleYear('last')
    let nextYear = parseInt(currentyear) + 1
    setNextYear(nextYear)
    setCurrentYear(nextYear)
    handleYear('next', nextYear)
    return nextYear;
  }

  function handleLastYear() {
    let lastYear = parseInt(currentyear) - 1
    setLastYear(lastYear)
    setCurrentYear(lastYear)
    handleYear('last', lastYear)
    return lastYear;
  }

  function handleYear(year, currentyear) {
    if (year === 'next') {
      setLastYear(parseInt(currentyear))
    }
    if (year === 'last') {
      console.log(currentyear)
      setNextYear(parseInt(currentyear))
    }
  }

let sundays = [];
console.log(sundays)
let mondays = [];
let tuesdays = [];
let wednesdays = [];
let thursdays = [];
let fridays = [];
let saturdays = [];
function handleDays(days) {
  for (let i = 0; i < days.length; i++) {
    if (isSunday(days[i])) {
      sundays.push(days[i])
      // console.log(`sunday ${days[i]}`)
    }
    else if (isMonday(days[i])) {
      mondays.push(days[i])
      // console.log(`monday ${days[i]}`)
    }
    else if (isTuesday(days[i])) {
      tuesdays.push(days[i])
      // console.log(`tuesday ${days[i]}`)
    }
    else if (isWednesday(days[i])) {
      wednesdays.push(days[i])
      // console.log(`wednesday ${days[i]}`)
    }
    else if (isThursday(days[i])) {
      thursdays.push(days[i])
      // console.log(`thursday ${days[i]}`)
    }
    else if (isFriday(days[i])) {
      fridays.push(days[i])
      // console.log(`friday ${days[i]}`)
    }
    else if (isSaturday(days[i])) {
      saturdays.push(days[i])
      // console.log(`saturday ${days[i]}`)
    }
  }
  console.log(`sundays: ${sundays}`)
  console.log(`mondays: ${mondays}`)
  console.log(`tuesdays: ${tuesdays}`)
  console.log(`wednesdays: ${wednesdays}`)
  console.log(`thursdays: ${thursdays}`)
  console.log(`fridays: ${fridays}`)
  console.log(`saturdays: ${saturdays}`)
}
let blank = '';

function handleBlank(day) {
  if (day > 1) {
    return (
      <div className='day'>{blank}</div>
    )
  }
}
// let sunday = format(sundays[0], 'd');
// console.log(`sundayat0: ${sundays[0]}`)
handleDays(days);
  const weeks = () => {
    return (
      <div className='week-container'>
          <div className='week-sun'>
            <div className='day'>SUN</div>
            {handleBlank(getDate(sundays.at(0)))}
            {sundays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
          <div className='week-mon'>
            <div className='day'>MON</div>
            {handleBlank(getDate(mondays.at(0)))}
            {mondays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
          <div className='week-tue'>
            <div className='day'>TUE</div>
            {handleBlank(getDate(tuesdays.at(0)))}
            {tuesdays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
          <div className='week-wed'>
            <div className='day'>WED</div>
            {handleBlank(getDate(wednesdays.at(0)))}
            {wednesdays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
          <div className='week-thurs'>
            <div className='day'>THUR</div>
            {handleBlank(thursdays[0])}
            {thursdays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
          <div className='week-fri'>
            <div className='day'>FRI</div>
            {handleBlank(format(fridays[0], 'd'))}
            {fridays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
          <div className='week-sat'>
            <div className='day'>SAT</div>
            {saturdays.map((day, dayIdx) => (
              <div className='day' key={dayIdx}>{format(day, 'd')}</div>
            ))}
          </div>
      </div>
    )
  }

  return (
    <div className="main-container">
      <div className="main-container-left">
        <div className='container-left-year'>
          <div className='year-last'>
            <button type="button" onClick={handleLastYear}>{parseInt(lastYear) - 1}</button>
          </div>
          <div className='year-current'>
            {currentMonth + ", "} {currentyear}
          </div>
          <div className='year-next'>
            <button type="button" onClick={handleNextYear}>{parseInt(nextYear) + 1}</button>
          </div>
        </div>
        <div className='container-left-week'>
          {weeks()}
        </div>
      </div>
      <div className="main-container-right">
      </div>
    </div>
  );
}
let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export default CalendarView;