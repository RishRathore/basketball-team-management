import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import NotificationDialog from './Dialog';

const Header = ({ activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(false);
  const { players } = useSelector((state) => state.basketball)

  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };

  const onTabChange = (index) => {
    if (index === 1 && players.length !== 5) setOpen(true);
    else setActiveTab(index);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Tabs
          value={activeTab}
          onChange={(e , index) => onTabChange(index)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Compose Team" {...a11yProps(0)} />
          <Tab label="First Quarter" {...a11yProps(1)} />
        </Tabs>
        <NotificationDialog open={open} onClose={() => setOpen(false)} message="First quarter should have 5 players at least" />
      </AppBar>
    </Box>
  );
};

export default Header;
