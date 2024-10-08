import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'black' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}>
            <Avatar alt="Weather" src="/logo...jpg" />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            M C - W E A T H E R 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
