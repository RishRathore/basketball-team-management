import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const rows = [
    { id: 1, field: 'firstName', headerName: 'First Name', width: 100 },
    { id: 2, field: 'lastName', headerName: 'Last name', width: 100 },
    { id: 2, field: 'height', headerName: 'Height', width: 100 },
    { id: 2, field: 'skills', headerName: 'Skills', width: 100 },
];

export default function TableBasic() {
    const { players } = useSelector((state) => state.basketball)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((row) => (
            <TableRow>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">{row.skills}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}