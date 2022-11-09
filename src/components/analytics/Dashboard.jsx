import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import DashboardListLayout from './DashboardListLayout';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TuneIcon from '@mui/icons-material/Tune';
import TimelineIcon from '@mui/icons-material/Timeline';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';



import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useViewport from '../../utils/useViewport';

const Dashboard = () => {
   let breakpoint = 1199;

   // custom Hook for window resize
   const { width } = useViewport();



   const [value, setValue] = useState('1');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   let leadData = [
      { name: 'Total Leads', value: 3000, gridBgColor: 'indigo', lead: true, month: true, icon: <TimelineIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Hired Leads', value: 2500, gridBgColor: 'teal', lead: true, month: true, icon: <TimelineIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Lost Leads', value: 500, gridBgColor: 'red', lead: true, month: true, icon: <TimelineIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Unresponsive Leads', value: 250, gridBgColor: 'blue', lead: true, month: true, icon: <TimelineIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Bogus Leads', value: 250, gridBgColor: 'bogus', lead: true, month: true, icon: <TimelineIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
   ];
   let hrData = [
      { name: 'All Employees', value: 30, gridBgColor: '', lead: true, month: true, icon: <PersonIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Increment Due', value: 5, gridBgColor: '', lead: true, month: true, icon: <CurrencyRupeeIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Active Employees', value: 500, gridBgColor: '', lead: true, month: true, icon: <PersonIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
   ];
   let projectData = [
      { name: 'Total Projects', value: 50, gridBgColor: '', lead: true, month: true, icon: <DashboardCustomizeIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Total Tasks', value: 250, gridBgColor: '', lead: true, month: true, icon: <DashboardCustomizeIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Today Tasks', value: 25, gridBgColor: '', lead: true, month: true, icon: <DashboardCustomizeIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Overdue Tasks', value: 50, gridBgColor: '', lead: true, month: true, icon: <DashboardCustomizeIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Categories', value: 100, gridBgColor: '', lead: true, month: false, icon: <AccountTreeIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
      { name: 'Credentials', value: 10, gridBgColor: '', lead: true, month: false, icon: <TuneIcon sx={{ color: "common.white", fontSize: '18px' }} /> },
   ];

   return (
      <Container sx={{ maxWidth: { xs: 'initial' }, pt: { xs: '25px', lg: 0 } }}>
         <TabContext value={width > breakpoint ? '1' : value}>
            <Box sx={{ width: '100%', bgcolor: 'primary.dark', position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 9, display: { lg: 'none' } }}>
               <TabList variant="scrollable" scrollButtons allowScrollButtonsMobile onChange={handleChange} aria-label="lab API tabs example" sx={{ px: 2 }}>
                  <Tab label="Project Management" value='1' sx={{ color: 'common.white', textTransform: 'capitalize', fontWeight: '400' }} />
                  <Tab label="HR Management" value='2' sx={{ color: 'common.white', textTransform: 'capitalize', fontWeight: '400' }} />
                  <Tab label="Marketing" value='3' sx={{ color: 'common.white', textTransform: 'capitalize', fontWeight: '400' }} />
               </TabList>
            </Box>
            <Typography variant="h1" component="h1" sx={{ color: 'common.black', mb: 0, fontFamily: "'Hind', sans-serif" }}>Dashboard</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
               <TabPanel value={width > breakpoint ? '1' : '1'} sx={{ pr: { xs: 1, xl: 6 }, pl: 0, width: { xs: '100%', lg: 'calc(50% - 8px)', xl: 'calc(33.333% - 32px)' } }}>
                  <Typography variant="h2" component="div" sx={{ color: 'sidebar.label', fontFamily: "'Hind', sans-serif" }}>Project Management</Typography>
                  <Grid container spacing={2}>
                     <DashboardListLayout data={projectData} />
                  </Grid>
               </TabPanel>
               <TabPanel value={width > breakpoint ? '1' : '2'} sx={{ pr: { xs: 0, xl: 6 }, pl: { xs: 1, xl: 0 }, width: { xs: '100%', lg: 'calc(50% - 8px)', xl: 'calc(33.333% - 32px)' } }}>
                  <Typography variant="h2" component="div" sx={{ color: 'sidebar.label', fontFamily: "'Hind', sans-serif" }}>HR Management</Typography>
                  <Grid container spacing={2}>
                     <DashboardListLayout data={hrData} />
                  </Grid>
               </TabPanel>
               <TabPanel value={width > breakpoint ? '1' : '3'} sx={{ pr: { xs: 0, xl: 0 }, pl: 0, width: { xs: '100%', lg: '100%', xl: 'calc(33.333% - 32px)' } }}>
                  <Typography variant="h2" component="div" sx={{ color: 'sidebar.label', fontFamily: "'Hind', sans-serif" }}>Marketing</Typography>
                  <Grid container spacing={2}>
                     <DashboardListLayout data={leadData} />
                  </Grid>
               </TabPanel>
            </Box>
         </TabContext>
      </Container>
   )
}

export default Dashboard;