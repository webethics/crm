import React from 'react';
import { Paper, Box, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DashboardListLayout = ({ data }) => {

   return (
      data.map((item, index) => (
         item.label ?
            <Grid item xs={12} sm={6} md={3} lg={3} xl={6} key={index}>
               <Paper elevation={3} sx={{ borderRadius: "4px", p: 2, backgroundColor: item.label === 'total' ? 'primary.dark' : item.label === 'hired' ? 'teal' : 'common.white' }}>
                  <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                     <Grid item xs={12} sx={{ display: 'flex', position: 'relative', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: { xs: 'row', xl: 'column' } }}>
                        <Box component="div" sx={{ backgroundColor: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'primary.light', display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', width: '34px', height: '34px', mr: { xs: 1, xl: 0 }, mb: { xs: 0, xl: 1 } }}>
                           {item.icon}
                        </Box>
                        <Box component="div" sx={{ display: 'inline-block', boxSizing: 'border-box', pr: 3, width: { xl: '100%' } }}>
                           <Typography component="div" sx={{ fontWeight: 'bold', color: item.label === 'total' ? 'common.white' : item.label === 'hired' ? 'common.white' : 'primary.dark', fontFamily: "'Roboto',sans-serif" }}>{item.value}</Typography>
                           <Typography component="div" sx={{ color: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'sidebar.label', lineHeight: 1, fontSize: '13px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.name}</Typography>
                        </Box>
                        <Typography component="div" sx={{ position: 'absolute', top: 0, right: 0, lineHeight: 1, color: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'sidebar.label', fontSize: '13px' }}>October</Typography>
                        <VisibilityIcon sx={{ position: 'absolute', bottom: 0, right: 0, fontSize: 16, color: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'sidebar.label' }} />
                     </Grid>
                  </Grid>
               </Paper>
            </Grid>
            :
            <Grid item xs={12} sm={6} md={3} lg={6} key={index}>
               <Paper elevation={3} sx={{ borderRadius: "4px", p: 2, backgroundColor: item.label === 'total' ? 'primary.dark' : item.label === 'hired' ? 'teal' : 'common.white' }}>
                  <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                     <Grid item xs={12} sx={{ display: 'flex', position: 'relative', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: { xs: 'row', xl: 'column' } }}>
                        <Box component="div" sx={{ backgroundColor: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'primary.light', display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', width: '34px', height: '34px', mr: { xs: 1, xl: 0 }, mb: { xs: 0, xl: 1 } }}>
                           {item.icon}
                        </Box>
                        <Box component="div" sx={{ display: 'inline-block', boxSizing: 'border-box', pr: 3, width: { xl: '100%' } }}>
                           <Typography component="div" sx={{ fontWeight: 'bold', color: item.label === 'total' ? 'common.white' : item.label === 'hired' ? 'common.white' : 'primary.dark', fontFamily: "'Roboto',sans-serif" }}>{item.value}</Typography>
                           <Typography component="div" sx={{ color: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'sidebar.label', lineHeight: 1, fontSize: '13px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.name}</Typography>
                        </Box>
                        <Typography component="div" sx={{ position: 'absolute', top: 0, right: 0, lineHeight: 1, color: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'sidebar.label', fontSize: '13px' }}>October</Typography>
                        <VisibilityIcon sx={{ position: 'absolute', bottom: 0, right: 0, fontSize: 16, color: item.label === 'total' ? 'primary.light' : item.label === 'hired' ? 'common.white' : 'sidebar.label' }} />
                     </Grid>
                  </Grid>
               </Paper>
            </Grid>
      ))
   )
}

export default DashboardListLayout;