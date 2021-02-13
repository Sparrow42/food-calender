import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
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
  
  const BasicTable = () => {
    const classes = useStyles();
  
    return (
    <>
    <h2>2019年5月17日の実績</h2>
    <Button variant="contained"><Link to='/food/register'>新規登録</Link></Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>食べ物名</TableCell>
              <TableCell align="right">カロリー</TableCell>
              <TableCell align="right">画像</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right"> <img src={row.img} /> </TableCell>
                <TableCell align="right"><Button variant="contained"><Link to='/food/:foodId/edit'>編集</Link></Button></TableCell>                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      </>
    );
  }

export const Home = (props) => {
    const classes2 = useStyles();
    
    return (
        <>
            <h2>home</h2>
            <div className="calender-wrapper">
            <img src='/img/calender_example.png'></img>
            </div>
            <BasicTable />
        </>

    );
};