import React, { useState } from 'react';
import request from 'superagent'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { MyCalendar } from './myCalendar';

const useStyles = makeStyles({
    table: {
      width: 500,
      "& img": {
          width: "30px",
          height: "20px"
      }
    },
    calender: {
        width: 700
    }
});


function createData(name, calories, img) {
  return { name, calories, img };
}
  
//列：食べ物名、カロリー、画像
const rows = [
  createData('プリン', 159, '/img/food_pudding.png'),
  createData('パン', 237, '/img/food_bread.png'),
  createData('ラーメン', 262, '/img/food_ramen.png')
];
  
  const BasicTable = (props) => {
    const classes = useStyles();
    const year = props.selectDate[0].getFullYear();
    const month = props.selectDate[0].getMonth() + 1;
    const date = props.selectDate[0].getDate();
    const day = new String( '日月火水木金土' ).charAt( props.selectDate[0].getDay() );

    const title = `${year}年${month}月${date}日（${day}）の実績`;

    // todo: 削除ボタンのコンポーネント化
    const removeItem = (foodId) => {
      alert(`削除するfoodId:${foodId}`);
    }
    
    return (
      <>
      <h2>{title}</h2>
      <Button variant="contained"><Link to='/food/register'>新規登録</Link></Button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>フード名</TableCell>
                <TableCell align="right">カロリー</TableCell>
                <TableCell align="right">画像</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* note:テーブルの上が空いちゃうけど、DBからの入力が変わるので放置する */}
              {props.selectDate && props.selectDate.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calorie}</TableCell>
                  <TableCell align="right"> <img src={row.img} /> </TableCell>
                  <TableCell align="right">
                    <Button variant="contained"><Link to={`/food/${row.foodId}/edit`}>編集</Link></Button>
                    <Button variant="contained" onClick={() => removeItem(row.foodId)}>削除</Button>  
                  </TableCell>                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

export const Home = (props) => {
    const [stateText, setStateText] = useState(["aaaa"]);
    //const [selectDate, setSelectDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState([ new Date(), {
      foodId: '',
      name: '', 
      calorie: '', 
      img: ''
    }]);

    console.log(selectDate);

    function handleDateChange(value) {
      //console.log(value);
      setSelectDate(value);
    }

    const stateTest = () => {
      setStateText(["bbbb"]);
    };

    const post = (e) => {
      request
        .get('/api/')
        .query({
          name: "test1_name",
          body: "test1_body"
        })
        .end((err, data) => {
          if (err) {
            console.error(err)
          }else {
            console.log('complete');
          }
        })
    };
    
    return (
        <>
          <h2>home</h2>
          <h2>テスト中</h2>
          <Button variant="contained" onClick={stateTest}>stateテストボタン</Button>
          {stateText}
          <Button variant="contained" onClick={post}>sqlテストボタン</Button>
          
          <Grid component="label" container alignItems="center" spacing={0}>
            <Grid item>食べ物</Grid>
            <Grid item>
              <Switch
                  //checked={state.checkedA}
                  checked="true"
                  //onChange={handleChange}
                  name="checkedA"
                  color="default"
                />
            </Grid>
            <Grid item>運動</Grid>
          </Grid>
          <div className='calendar-list-wrapper'>
            <div className="calender-wrapper">
              <h2>カレンダー制作中</h2>
              <MyCalendar selectDate={selectDate} onDateChange={handleDateChange} />
            </div>
            <div className='right-side-list'>
              <BasicTable selectDate={selectDate} />
            </div>
          </div>
        </>

    );
};