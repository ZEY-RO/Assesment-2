import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextFieldAndCheckBox from "./TestComp";

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const rows = [
    "Estate",
    "5-6 Passengers",
    "7 Passengers",
    "8 Passengers",
    "9 Passengers",
    "15 Passengers",
    "16 Passengers",
  ];
  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#d8c4b798" }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#d8c4b798" }}>
          <TableRow>
            {rows.map((rows) => (
              <TableCell key={rows} component="th" scope="row">
                {rows}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {rows.map((rows, index) => (
              <TextFieldAndCheckBox key={index}></TextFieldAndCheckBox>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
