import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Box, Typography, IconButton } from '@mui/material';

const MuiDrawer = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   return (
      <>
         <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
         </IconButton>
         <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box p={2} width="250px" textAlign="center" role="presentation">
               <Typography variant="h6" component="div">
                  this is the sidebar using React MUI.
               </Typography>
            </Box>
         </Drawer>
      </>
   )
}

export default MuiDrawer;