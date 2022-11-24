import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Header = ({ activeTab, setActiveTab }) => {
  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Tabs
          value={activeTab}
          onChange={(e, index) => {
            setActiveTab(index);
          }}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Compose Team" {...a11yProps(0)} />
          <Tab label="First Quarter" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default Header;
