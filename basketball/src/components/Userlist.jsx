import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const rows = {newFormValues.firstName}

export default function UserList(formValues) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        // rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        newFormValues={ formValues.firstName}
      />
    </div>
  );
}