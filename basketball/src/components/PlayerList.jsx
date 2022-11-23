import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const columns = [
	{ id: 1, field: 'firstName', headerName: 'First Name', width: 100 },
	{ id: 2, field: 'lastName', headerName: 'Last name', width: 100 }
];

export default function PlayerList() {
	const { players } = useSelector((state) => state.basketball)

	if (players.length > 0) return null

	return (
		<Box sx={{ height: 400, width: '50%' }}>
			<DataGrid
				rows={players}
				columns={columns}
				pageSize={2}
				rowsPerPageOptions={[2]}
			/>
		</Box>
	);
}