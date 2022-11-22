import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({isActive, setIsActive}) => {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setIsActive('compose')} >
            Compose Team
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setIsActive('quarter') } >
            First Quarter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;