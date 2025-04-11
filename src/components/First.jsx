import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const First = () => {
  var data = [
   { name: "Anandhu", age: 19, place: "ckdy" },
    { name: "Anjo", age: 20, place: "ijk" },
    { name: "Anaj", age: 19, place: "ijk" },
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>NAME</b></TableCell>
              <TableCell align="center"><b>AGE</b></TableCell>
              <TableCell align="center"><b>PLACE</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{value.name}</TableCell>
                  <TableCell align = "center">{value.age}</TableCell>
                  <TableCell align="center">{value.place}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default First;
