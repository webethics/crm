import React from 'react'
import { Box } from '@mui/material';

const MuiLayout = () => {
   // We can not access the theme css properties (primary.main and primary.light and hover) in the normal html elements that's why we use Box component instead.
   return (
      <>
         <Box component="section" sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: '100px',
            height: '100px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
               backgroundColor: 'primary.light'
            }
         }}>Sandeep</Box>

         {/* We could not use the the css properties as props or attributes with some of them are shortend like bgcolor and padding as p */}
         <Box component="section" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" width="100px" height="100px" bgcolor="primary.main" color="white" p={2}>Kamra</Box>
      </>
   )
}

export default MuiLayout;