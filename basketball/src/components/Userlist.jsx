import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { id: 1, field: 'firstName', headerName: 'First name', width: 130 },
  { id: 2, field: 'lastName', headerName: 'Last name', width: 130 }
];

export default function DataTable() {
    const { players = [] } = useSelector((state) => state.basketball)
    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={players}
            columns={columns}
            pageSize={2}
            rowsPerPageOptions={[2]}
        />
        </div>
    );
}