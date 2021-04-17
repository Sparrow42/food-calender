import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

export const MyCalendar = (props) => {
  function createData(date, name, img) {
    return { date, name, img };
  }

  const dateTemp1 = new Date(2021, 3, 12);
  const dateTemp2 = new Date(2021, 3, 12);
  const dateTemp3 = new Date(2021, 3, 16);

  const rows = [
    createData( dateTemp1, 'プリン', '/img/food_pudding.png'),
    createData( dateTemp2, 'パン', '/img/food_bread.png'),
    createData( dateTemp3, 'ラーメン', '/img/food_ramen.png')
  ];

  //const [tileValue, setTileValue] = useState(<p>sample</p>);
  
  function onChange(nextValue) {
    //setSelectDay(nextValue);
  }

  function onClickDate(value, event) {
    props.onDateChange(value);
  }

  const getTile = ({ activeStartDate, date, view }) => {
    console.log(date.getDate());
    const dispImg = rows.map((row) => {
      if(view === 'month' &&
      date.getFullYear() === row.date.getFullYear() && 
      date.getMonth() === row.date.getMonth() && 
      date.getDate() === row.date.getDate()){
      
        return (<div><img style={{width: 30}} src={row.img}></img></div>);
      }
    });

    return dispImg;

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