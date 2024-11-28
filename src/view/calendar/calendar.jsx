import { eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, parseISO, startOfToday } from 'date-fns';
import './newcalendar.css';
import { useState } from 'react';

function CalendarView() {

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let [currentyear, setCurrentYear] = useState(format(today, 'yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function nexYear() {
    let thisYear = format(startOfToday(), 'yyyy')
    let nextYear = parseInt(thisYear) + 1
    return nextYear;
  }

  function lastYear() {
    let thisYear = format(startOfToday(), 'yyyy')
    let lastYear = parseInt(thisYear) - 1
    return lastYear;
  }

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
            {lastYear()}
          </div>
          <div className='year-current'>
            {format(today, 'MMMM yyyy')}
          </div>
          <div className='year-next'>
            {nexYear()}
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

export default CalendarView;