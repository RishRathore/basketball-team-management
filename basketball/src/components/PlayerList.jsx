import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

 const PlayerList = () => {
  const { players } = useSelector((state) => state.basketball)

  return (
    <TableContainer component={Paper}>
        <h2 align="left">Player List</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell center>Last name</TableCell>
            <TableCell center>Height</TableCell>
            <TableCell center>Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((row, i) => (
            <TableRow key={i}>
              <TableCell center>{row.firstName}</TableCell>
              <TableCell center>{row.lastName}</TableCell>
              <TableCell center>{row.height}</TableCell>
              <TableCell center>{row.skills}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default PlayerList;