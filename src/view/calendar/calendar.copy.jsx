import { eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, parseISO, set, startOfToday, getDate, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday } from 'date-fns';
import './newcalendar.css';
import { useState } from 'react';

function CalendarViewCopy() {

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

function handleDays(days) {
  for (let i = 0; i < days.length; i++) {
    if (isSunday(days[i])) {
      console.log(`sunday ${days[i]}`)
    }
    else if (isMonday(days[i])) {
      console.log(`monday ${days[i]}`)
    }
    else if (isTuesday(days[i])) {
      console.log(`tuesday ${days[i]}`)
    }
    else if (isWednesday(days[i])) {
      console.log(`wednesday ${days[i]}`)
    }
    else if (isThursday(days[i])) {
      console.log(`thursday ${days[i]}`)
    }
    else if (isFriday(days[i])) {
      console.log(`friday ${days[i]}`)
    }
    else if (isSaturday(days[i])) {
      console.log(`saturday ${days[i]}`)
    }
  }
}

handleDays(days);
  const weeks = () => {
    return (
      <>
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
      </>
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
        <div className='container-left-days'>
        {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
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

export default CalendarViewCopy;