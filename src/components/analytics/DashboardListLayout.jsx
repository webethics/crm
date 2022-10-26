import React from 'react';
import { Paper, Box, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DashboardListLayout = ({ data }) => {

   return (
      data.map((item, index) => (
         <Grid item xs={12} sm={6} md={3} lg={item.label ? 3 : 6} xl={6} key={index}>
            <Paper elevation={3} sx={{ borderRadius: "4px", p: 2, backgroundColor: item.label === 'total' ? 'indigo.300' : item.label === 'hired' ? 'teal.300' : item.label === 'lost' ? 'red.300' : item.label === 'unresponsive' ? 'blue.300' : item.label === 'bogus' ? 'bogus.300' : 'common.white' }}>
               <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <Grid item xs={12} sx={{ display: 'flex', position: 'relative', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: { xs: 'row', xl: 'column' } }}>
                     <Box component="div" sx={{ backgroundColor: item.lead && item.label === 'total' ? 'indigo.400' : item.label === 'lost' ? 'red.400' : item.label === 'unresponsive' ? 'blue.400' : item.label === 'hired' ? 'teal.400' : item.label === 'bogus' ? 'bogus.400' : 'primary.light', display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', width: '34px', height: '34px', mr: { xs: 1, xl: 0 }, mb: { xs: 0, xl: 1 } }}>
                        {item.icon}
                     </Box>
                     <Box component="div" sx={{ display: 'inline-block', boxSizing: 'border-box', pr: 3, width: { xl: '100%' } }}>
                        <Typography component="div" sx={{ fontWeight: 'bold', color: item.lead && item.label === 'total' || item.label === 'hired' || item.label === 'lost' || item.label === 'unresponsive' || item.label === 'bogus' ? 'common.white' : 'primary.dark', fontFamily: "'Roboto',sans-serif", fontSize: { xs: '15px', lg: '14px' } }}>{item.value}</Typography>
                        <Typography component="div" sx={{ color: item.lead && item.label === 'total' || item.label === 'hired' || item.label === 'lost' || item.label === 'unresponsive' || item.label === 'bogus' ? 'common.white' : 'sidebar.label', lineHeight: 1, fontSize: { xs: '14px', lg: '13px' }, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.name}</Typography>
                     </Box>
                     <Typography component="div" sx={{ position: 'absolute', top: 0, right: 0, lineHeight: 1, color: item.lead && item.label === 'total' || item.label === 'hired' || item.label === 'lost' || item.label === 'unresponsive' || item.label === 'bogus' ? 'common.white' : 'sidebar.label', fontSize: { xs: '14px', lg: '13px' } }}>October</Typography>
                     <VisibilityIcon sx={{ position: 'absolute', bottom: 0, right: 0, fontSize: 16, color: item.lead && item.label === 'total' || item.label === 'hired' || item.label === 'lost' || item.label === 'unresponsive' || item.label === 'bogus' ? 'common.white' : 'sidebar.label' }} />
                  </Grid>
               </Grid>
            </Paper>
         </Grid>
      ))
   )
}

export default DashboardListLayout;