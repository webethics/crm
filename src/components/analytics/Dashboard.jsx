import React, { useState } from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import DashboardListLayout from './DashboardListLayout';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Person2Icon from '@mui/icons-material/Person2';
import TuneIcon from '@mui/icons-material/Tune';
import TimelineIcon from '@mui/icons-material/Timeline';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';



import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useViewport from '../../utils/useViewport';

const Dashboard = () => {
   const breakpoint = 1199;

   // custom Hook for window resize
   const { width } = useViewport();

   const [value, setValue] = useState('1');
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   let leadData = [
      { name: 'Total Leads', value: 3000, gridBgColor: 'indigo', lead: true, month: true, icon: <TimelineIcon fontSize="small" sx={{ color: "common.white" }} /> },
      { name: 'Hired Leads', value: 2500, gridBgColor: 'teal', lead: true, month: true, icon: <TimelineIcon fontSize="small" sx={{ color: "common.white" }} /> },
      { name: 'Lost Leads', value: 500, gridBgColor: 'red', lead: true, month: true, icon: <TimelineIcon fontSize="small" sx={{ color: "common.white" }} /> },
      { name: 'Unresponsive Leads', value: 250, gridBgColor: 'blue', lead: true, month: true, icon: <TimelineIcon fontSize="small" sx={{ color: "common.white" }} /> },
      { name: 'Bogus Leads', value: 250, gridBgColor: 'bogus', lead: true, month: true, icon: <TimelineIcon fontSize="small" sx={{ color: "common.white" }} /> },
   ];
   let hrData = [
      { name: 'All Employees', value: 30, gridBgColor: '', lead: true, month: true, icon: <PersonIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Increment Due', value: 5, gridBgColor: '', lead: true, month: true, icon: <CurrencyRupeeIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Active Employees', value: 500, gridBgColor: '', lead: true, month: true, icon: <Person2Icon sx={{ color: "primary.dark" }} /> },
   ];
   let projectData = [
      { name: 'Total Projects', value: 50, gridBgColor: '', lead: true, month: true, icon: <DashboardCustomizeIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Total Tasks', value: 250, gridBgColor: '', lead: true, month: true, icon: <FormatListNumberedIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Today Tasks', value: 25, gridBgColor: '', lead: true, month: true, icon: <FormatListNumberedIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Overdue Tasks', value: 50, gridBgColor: '', lead: true, month: true, icon: <FormatListNumberedIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Categories', value: 100, gridBgColor: '', lead: true, month: false, icon: <AccountTreeIcon sx={{ color: "primary.dark" }} /> },
      { name: 'Credentials', value: 10, gridBgColor: '', lead: true, month: false, icon: <TuneIcon sx={{ color: "primary.dark" }} /> },
   ];

   return (
      <Container sx={{ maxWidth: { xs: 'initial' }, pt: { xs: '25px', lg: 0 }, px: 0 }}>
         <TabContext value={value}>
            <Box sx={{ width: '100%', bgcolor: 'primary.dark', position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 9, display: { lg: 'none' } }}>
               <TabList variant="scrollable" scrollButtons allowScrollButtonsMobile onChange={handleChange} aria-label="lab API tabs example" sx={{ px: 2 }}>
                  <Tab label="Project Management" value='1' sx={{ color: 'common.white', textTransform: 'capitalize', fontWeight: '400' }} />
                  <Tab label="HR Management" value='2' sx={{ color: 'common.white', textTransform: 'capitalize', fontWeight: '400' }} />
                  <Tab label="Marketing" value='3' sx={{ color: 'common.white', textTransform: 'capitalize', fontWeight: '400' }} />
               </TabList>
            </Box>
            <Typography variant="h1" component="h1" sx={{ color: 'primary.dark', px: 2, mb: 0, fontFamily: "'Hind', sans-serif" }}>Dashboard</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
               <TabPanel value={width > breakpoint ? "1" : '1'} sx={{ px: { xs: 2, xl: 2 }, width: { xs: '100%', lg: 'calc(50% - 32px)', xl: 'calc(33.333% - 32px)' } }}>
                  <Typography variant="h2" component="div" sx={{ color: 'sidebar.label', fontFamily: "'Hind', sans-serif" }}>Project Management</Typography>
                  <Grid container spacing={2}>
                     <DashboardListLayout data={projectData} />
                  </Grid>
               </TabPanel>
               <TabPanel value={width > breakpoint ? "1" : '2'} sx={{ px: { xs: 2, xl: 2 }, width: { xs: '100%', lg: 'calc(50% - 32px)', xl: 'calc(33.333% - 32px)' } }}>
                  <Typography variant="h2" component="div" sx={{ color: 'sidebar.label', fontFamily: "'Hind', sans-serif" }}>HR Management</Typography>
                  <Grid container spacing={2}>
                     <DashboardListLayout data={hrData} />
                  </Grid>
               </TabPanel>
               <TabPanel value={width > breakpoint ? "1" : '3'} sx={{ px: { xs: 2, xl: 2 }, width: { xs: '100%', lg: '100%', xl: 'calc(33.333% - 32px)' } }}>
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