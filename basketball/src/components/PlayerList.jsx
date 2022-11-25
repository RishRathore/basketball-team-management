import  React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 const PlayerList = () => {
  const { players } = useSelector((state) => state.basketball)

  return (
    <TableContainer component={Paper}>
        <h2 align="left">Player List</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="centre">Last name</TableCell>
            <TableCell align="centre">Height</TableCell>
            <TableCell align="centre">Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((row) => (
            <TableRow>
              <TableCell align="centre">{row.firstName}</TableCell>
              <TableCell align="centre">{row.lastName}</TableCell>
              <TableCell align="centre">{row.height}</TableCell>
              <TableCell align="centre">{row.skills}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default PlayerList;