import React from 'react';
import { Paper, Box, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DashboardListLayout = ({ data }) => {
   return (
      data.map((item, index) => (
         <Grid item xs={12} sm={6} md={3} lg={item.label ? 3 : 6} xl={6} key={index}>
            <Paper elevation={0} sx={{ borderRadius: "4px", p: 2, borderWidth: '1px', borderStyle: 'solid', borderColor: item.gridBgColor ? (item.gridBgColor + '.' + 300) : 'rgba(0, 0, 0, 0.12)', backgroundColor: item.gridBgColor ? (item.gridBgColor + '.' + 300) : 'common.white' }}>
               {/* <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}> */}
               <Grid item xs={12} sx={{ display: 'flex', position: 'relative', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: { xs: 'row', xl: 'column' } }}>

                  <Box component="div" sx={{ backgroundColor: item.gridBgColor ? (item.gridBgColor + '.' + 400) : 'primary.dark', display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', width: '34px', height: '34px', mr: { xs: 1, xl: 0 }, mb: { xs: 0, xl: 1 } }}>
                     {item.icon}
                  </Box>

                  <Box component="div" sx={{ display: 'inline-block', boxSizing: 'border-box', pr: 3, width: { xs: 'calc(100% - 34px)', xl: '100%' } }}>
                     <Typography component="div" sx={{ fontWeight: 'bold', color: item.gridBgColor ? 'common.white' : 'primary.dark', fontSize: '15px' }}>{item.value}</Typography>
                     <Typography component="div" sx={{ color: item.gridBgColor ? 'common.white' : 'sidebar.label', lineHeight: 1, fontSize: '14px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.name}</Typography>
                  </Box>
                  <Typography component="div" sx={{ position: 'absolute', top: 0, right: 0, lineHeight: 1, color: item.gridBgColor ? 'common.white' : 'sidebar.label', fontSize: '14px' }}>October</Typography>
                  <VisibilityIcon sx={{ position: 'absolute', bottom: 0, right: 0, fontSize: '16px', color: item.gridBgColor ? 'common.white' : 'sidebar.label' }} />
               </Grid>
               {/* </Grid > */}
            </Paper >
         </Grid >
      ))
   )
}

export default DashboardListLayout;