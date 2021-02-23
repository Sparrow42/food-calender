import React from 'react';
import {
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

//Todo:chooseListといずれ統合する

const useStyles = makeStyles({
    table: {
      width: 400,
      "& img": {
          width: "30px",
          height: "20px"
      }
    },
});

  function createData(name, img) {
    return { name, img };
  }
  
  //列：食べ物名、カロリー、画像
  const rows = [
    createData('腹筋', '/img/food_pudding.png'),
    createData('大胸筋', '/img/food_bread.png'),
    createData('下半身', '/img/food_ramen.png')
  ];
  
  export const myExaciseList = () => {
    const classes = useStyles();
  
    return (
    <>
    <div className='favfood-table-container'>
      <TableContainer component={Paper}>
        <h3>Myエクササイズ一覧</h3>
        <Button variant="contained"><Link to='/myexacise/register'>新規登録</Link></Button>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>エクササイズ名</TableCell>
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
                <TableCell align="right"> <img src={row.img} /> </TableCell>
                <TableCell align="right">
                    <Button variant="contained"><Link to='/myexacise/:exaciseId/edit'>編集</Link></Button>
                    <Button variant="contained">削除</Button>
                </TableCell>                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </>
    );
  };