import React from "react";
import Cart from "./Cart";
import "./Header.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch} from "react-redux";
import { authActions } from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    dispatch(authActions.LogOut())
  }

  return (
    <header>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Store
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
    </header>
  );
};

export default Header;
