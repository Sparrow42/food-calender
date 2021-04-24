import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

export const MyCalendar = (props) => {
  function createData(date, foodId, name, calorie, img) {
    return { date, foodId, name, calorie, img };
  }

  const dateTemp1 = new Date(2021, 3, 12);
  const dateTemp2 = new Date(2021, 3, 12);
  const dateTemp3 = new Date(2021, 3, 16);

  const rows = [
    createData( dateTemp1, '1', 'プリン', '150', '/img/food_pudding.png'),
    createData( dateTemp2, '2', 'パン', '120', '/img/food_bread.png'),
    createData( dateTemp3, '3', 'ラーメン', '30', '/img/food_ramen.png')
  ];

  // const rows = { 
  //     [dateTemp1]: {
  //       {name: 'プリン', calorie:'150', img:'/img/food_pudding.png'},
  //       {name: 'パン', calorie:'120', img:'/img/food_bread.png'}
  //     },
  //     [dateTemp3]: {
  //       {name: 'ラーメン', calorie:'30', img:'/img/food_ramen.png'}
  //     }
  // };

  //const [tileValue, setTileValue] = useState(<p>sample</p>);
  
  function onChange(nextValue) {
    //setSelectDay(nextValue);
  }

  function onClickDate(value) {
    console.log('onclickdate');

    //todo: 該当日付foodをDBから取ってくる操作に変える
    const dispBasicTable = rows.filter((row) => {
      console.log('dispBasic running');
      return (value.getFullYear() === row.date.getFullYear() && 
      value.getMonth() === row.date.getMonth() && 
      value.getDate() === row.date.getDate()); 
    });

    console.log(dispBasicTable);
    if(dispBasicTable.length !== 0){
      const setArr = [value].concat(dispBasicTable);
      //props.onDateChange([value, {name: dispBasicTable[0].name, calorie: dispBasicTable[0].calorie, img: dispBasicTable[0].img}]);
      props.onDateChange(setArr);
    }else{
      props.onDateChange([value, {}]);
    }
  }

  const getTile = ({ activeStartDate, date, view }) => {
    console.log('getTile1');
    //console.log(date.getDate());
    const dispImg = rows.map((row) => {
      if(view === 'month' &&
      date.getFullYear() === row.date.getFullYear() && 
      date.getMonth() === row.date.getMonth() && 
      date.getDate() === row.date.getDate()){
      
        return (<div><img style={{width: 30}} src={row.img}></img></div>);
      }
    });
    console.log('getTile2');

    return dispImg;
  }

  return (
    <Calendar
      onChange={onChange}
      onClickDay={onClickDate}
      tileContent={getTile}
      value={props.selectDate[0]}
    />
  );
};