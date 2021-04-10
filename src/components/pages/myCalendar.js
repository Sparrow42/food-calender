import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';

export const MyCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [tileValue, setTileValue] = useState(<p>sample</p>);

  console.log(value);

  function onChange(nextValue) {
    console.log('aaa');
    setValue(nextValue);
  }

  function onClickDay(value, event) {
    console.log('Clicked day: ', value);
  }

  const getTile = ({ activeStartDate, date, view }) => {
    if(view === 'month' && date.getDay() === 0){
      return (<p>It's Sunday!</p>);
    }else{
      return (<p> </p>);
    }
  }

  return (
    <Calendar
      onChange={onChange}
      //onClickDay={(value, event) => alert('Clicked day: ', value)}
      tileContent={getTile}
      value={value}
    />
  );
};