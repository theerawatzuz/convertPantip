import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import Logo from './assets/logo.png'
import Container from '@mui/material/Container';


export default function Navbar() {
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={Logo} alt="logo" style={{ height: "60px" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Button sx={{ fontWeight: 'bold', color: 'black' , ml: 3}}>HOME</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>FEED</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>PANTIP PICK</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>PANTIP HITZ</Button>
            <Button sx={{ color: 'grey.600' , ml:2 }}>EXPLORE</Button>
          </Typography>
          <Button variant="outlined">LOGIN / REGISTER</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}