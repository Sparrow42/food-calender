import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    width: 400,
    "& img": {
      width: "30px",
      height: "20px",
    },
  },
});

function createData(name, img) {
  return { name, img };
}

//列：食べ物名、カロリー、画像
const rows = [
  createData("プリン", "/img/food_pudding.png"),
  createData("パン", "/img/food_bread.png"),
  createData("ラーメン", "/img/food_ramen.png"),
];

export const FavFoodTable = () => {
  const classes = useStyles();

  return (
    <>
      <div className="favfood-table-container">
        <TableContainer component={Paper}>
          <h3>登録済み</h3>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>食べ物名</TableCell>
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
                  <TableCell align="right">
                    {" "}
                    <img src={row.img} />{" "}
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained">
                      <Link to="/food/:foodId/edit">使う</Link>
                    </Button>
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
