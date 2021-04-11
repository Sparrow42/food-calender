import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

export const MyCalendar = (props) => {
  //const [tileValue, setTileValue] = useState(<p>sample</p>);
  
  function onChange(nextValue) {
    //setSelectDay(nextValue);
  }

  function onClickDate(value, event) {
    props.onDateChange(value);
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
      onClickDay={onClickDate}
      tileContent={getTile}
      value={props.selectDate}
    />
  );
};