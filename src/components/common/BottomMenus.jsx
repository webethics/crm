import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction, Badge, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FolderIcon from '@mui/icons-material/Folder';

const BottomMenus = () => {
   const [value, setValue] = useState('analytics');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Stack sx={{ bottom: 0, position: "fixed", left: 0, right: 0, backgroundColor: "#ffffff", display: { lg: "none" } }}>
         <BottomNavigation value={value} onChange={handleChange} sx={{ maxWidth: '320px', width: '100%', margin: 'auto', }}>

            <BottomNavigationAction
               sx={{ px: 1, pt: 0, minWidth: '60px' }}
               // label={<Typography variant='text' sx={{ fontFamily: "'Roboto', sans-serif", lineHeight: 2, textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.5px', color: 'sidebar.label' }}>PM</Typography>}
               value="pm"
               icon={<Link to="/projects"><FolderIcon sx={{ color: value === "pm" ? "primary.dark" : "sidebar.label" }} /></Link>}
            />


            <BottomNavigationAction
               sx={{ px: 1, pt: 0, minWidth: '60px' }}
               value="hr"
               icon={<Link to="/employees"><Badge badgeContent={100} max={9}><PersonSearchIcon sx={{ color: value === "hr" ? "primary.dark" : "sidebar.label" }} /></Badge></Link>}
            />


            <BottomNavigationAction
               sx={{ px: 1, pt: 0, mt: '-27px', backgroundColor: value === 'analytics' ? 'primary.light' : 'primary.light', height: '55px', borderRadius: '100%', lineHeight: '55px', maxWidth: '55px', minWidth: '55px', boxShadow: '0 0 0px 5px #acaeb4' }}
               value="analytics"
               icon={<Link to="/"><DashboardCustomizeIcon sx={{ color: value === "analytics" ? "primary.dark" : "primary.dark", verticalAlign: "middle" }} /></Link>}
            />


            <BottomNavigationAction
               sx={{ px: 1, pt: 0, minWidth: '60px' }}
               value="marketing"
               icon={<Link to="/sales"><ShowChartIcon sx={{ color: value === "marketing" ? "primary.dark" : "sidebar.label" }} /></Link>}
            />


            <BottomNavigationAction
               sx={{ px: 1, pt: 0, minWidth: '60px', maxWidth: '60px' }}
               value="account"
               icon={<Link to="/user"><PersonIcon sx={{ color: value === "account" ? "primary.dark" : "sidebar.label" }} /></Link>}
            />

         </BottomNavigation>
      </Stack>
   )
}

export default BottomMenus;