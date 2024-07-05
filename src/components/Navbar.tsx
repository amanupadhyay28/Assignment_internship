import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
  const appBarStyle = {
    backgroundColor: '#3f51b5',
  };

  const logoStyle = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '16px',
  };

  return (
    <>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" style={logoStyle} component={Link} to="/">
            MyApp
          </Typography>
          <Button color="inherit" component={Link} to="/" style={linkStyle}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/table" style={linkStyle}>
            DataTable
          </Button>
          <Button color="inherit" component={Link} to="/accordian" style={linkStyle}>
            Accordian
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
