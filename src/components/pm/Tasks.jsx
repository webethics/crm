import React, { useState } from 'react';
import { Chip, Container, Box, Grid, Typography, Checkbox, Tooltip, Button, FormControlLabel, MenuItem, TextField, Drawer } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import useViewport from '../../utils/useViewport';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import NewProject from './NewProject';

const ActionIcons = () => {
   const handleEditClick = (id) => { console.log(`The id of event is ${id}`) };
   return (
      <>
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="View Details" arrow placement="top">
                  <VisibilityIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(1)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="Edit Details" arrow placement="top">
                  <CreateIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(2)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="Clone" arrow placement="top">
                  <FileCopyIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(3)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="Mr. Harsh Vardhan" arrow placement="top">
                  <PersonIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(4)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="Chat" arrow placement="top">
                  <ChatIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(5)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="Download Attachments" arrow placement="top">
                  <DownloadIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(6)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 1 }}
            control={
               <Tooltip title="Delete" arrow placement="top">
                  <DeleteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(7)} />
               </Tooltip>
            }
         />
      </>
   );
};

const rows = [
   { id: 1, ts_title: 'create and make responsive task listing screen using data grid table in react mui.', pr_title: 'CRM Designs', ts_priority: 'normal', ts_type: 'bug', ts_status: 'open' },
   { id: 2, ts_title: 'Finance Manager', pr_title: 'Finance Manager', ts_priority: 'medium', ts_type: 'bug', ts_status: 'close' },
   { id: 3, ts_title: 'Safe Car', pr_title: 'Safe Car', ts_priority: 'high', ts_type: 'bug', ts_status: 'hold' },
   { id: 4, ts_title: 'Unleashed Strippers', pr_title: 'Unleashed Strippers', ts_priority: 'normal', ts_type: 'bug', ts_status: 'open' },
   { id: 5, ts_title: 'Webethics Solutions', pr_title: 'Webethics Solutions', ts_priority: 'medium', ts_type: 'bug', ts_status: 'open' },
   { id: 6, ts_title: 'Auction Marketplace', pr_title: 'Auction Marketplace', ts_priority: 'high', ts_type: 'bug', ts_status: 'hold' },
   { id: 7, ts_title: 'create and make responsive task listing screen using data grid table in react mui.', pr_title: 'CRM Designs', ts_priority: 'normal', ts_type: 'bug', ts_status: 'close' },
   { id: 8, ts_title: 'Finance Manager', pr_title: 'Finance Manager', ts_priority: 'normal', ts_type: 'bug', ts_status: 'close' },
   { id: 9, ts_title: 'Safe Car', pr_title: 'Safe Car', ts_priority: 'normal', ts_type: 'bug', ts_status: 'open' },
   { id: 10, ts_title: 'Unleashed Strippers', pr_title: 'Unleashed Strippers', ts_priority: 'medium', ts_type: 'bug', ts_status: 'open' },
   { id: 11, ts_title: 'Webethics Solutions', pr_title: 'Webethics Solutions', ts_priority: 'medium', ts_type: 'bug', ts_status: 'hold' },
   { id: 12, ts_title: 'Auction Marketplace', pr_title: 'Auction Marketplace', ts_priority: 'medium', ts_type: 'bug', ts_status: 'open' },
   { id: 13, ts_title: 'create and make responsive task listing screen using data grid table in react mui.', pr_title: 'CRM Designs', ts_priority: 'medium', ts_type: 'bug', ts_status: 'open' },
   { id: 14, ts_title: 'Finance Manager', pr_title: 'Finance Manager', ts_priority: 'high', ts_type: 'bug', ts_status: 'open' },
   { id: 15, ts_title: 'Safe Car', pr_title: 'Safe Car', ts_priority: 'high', ts_type: 'bug', ts_status: 'close' },
   { id: 16, ts_title: 'Unleashed Strippers', pr_title: 'Unleashed Strippers', ts_priority: 'high', ts_type: 'bug', ts_status: 'close' },
   { id: 17, ts_title: 'Webethics Solutions', pr_title: 'Webethics Solutions', ts_priority: 'high', ts_type: 'bug', ts_status: 'hold' },
   { id: 18, ts_title: 'Auction Marketplace', pr_title: 'Auction Marketplace', ts_priority: 'high', ts_type: 'bug', ts_status: 'hold' },
   { id: 19, ts_title: 'create and make responsive task listing screen using data grid table in react mui.', pr_title: 'CRM Designs', ts_priority: 'high', ts_type: 'bug', ts_status: 'open' },
   { id: 20, ts_title: 'Finance Manager', pr_title: 'Finance Manager', ts_priority: 'high', ts_type: 'bug', ts_status: 'open' },
   { id: 21, ts_title: 'Safe Car', pr_title: 'Safe Car', ts_priority: '', ts_type: 'bug', ts_status: 'open' },
   { id: 22, ts_title: 'Unleashed Strippers', pr_title: 'Unleashed Strippers', ts_priority: 'normal', ts_type: 'bug', ts_status: 'open' },
   { id: 23, ts_title: 'Webethics Solutions', pr_title: 'Webethics Solutions', ts_priority: 'normal', ts_type: 'bug', ts_status: 'open' },
   { id: 24, ts_title: 'Auction Marketplace', pr_title: 'Auction Marketplace', ts_priority: 'normal', ts_type: 'bug', ts_status: 'open' },
];

const RedesignCheckbox = styled(Checkbox)`
   padding:0;
   border-radius: 0;
   width: 18px;
   height: 17px;
   overflow: hidden;
   border-radius: 2px;
   border: 1px solid rgba(0,0,0,0.12);
   &:after {
      content:'';
      position: absolute;
      width:14px;
      height:13px;
   }
   &.Mui-checked {
   border-color: ${props => props.theme.palette.primary.dark};
      &:after {
         background:${props => props.theme.palette.primary.dark};
      }
   }
   svg {
      display: none;
   }
`;

const Tasks = () => {
   const { width } = useViewport();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const handleStatus = (params) => {
      console.log(params)
   }
   const columns = [
      {
         field: 'ts_title', headerName: 'Task Title', width: width > 1800 ? 600 : width > 1440 ? 300 : 225, sortable: false, hideable: false,
         renderCell: (params) => (
            <Typography component="div" variant="" sx={{}}>
               <Typography component="span" variant="body2" sx={{ display: 'block', color: 'primary.dark', fontWeight: '500', whiteSpace: 'normal', lineHeight: 1 }}> {params.value}</Typography>
               <Typography component="span" variant="body2" sx={{ display: 'block', fontSize: '12px', color: 'sidebar.label', letterSpacing: '0.5px' }}> 17/Oct/2022 - 17/Nov/2022</Typography>
            </Typography>
         ),
      },
      {
         field: 'pr_title', headerName: 'Project Title', width: width > 1800 ? 250 : width > 1440 ? 300 : 225, sortable: false, hideable: false,
         renderCell: (params) => (
            <Typography component="div" variant="" sx={{}}>
               <Typography component="span" variant="body2" sx={{ display: 'block' }}>{params.value}</Typography>
            </Typography>
         ),
      },
      {
         field: 'ts_status', headerName: 'Status', width: width > 1800 ? 150 : width > 1440 ? 150 : 150, sortable: false, hide: false,
         renderCell: (params) => {
            return (
               // <Chip label={params.value} size="small" sx={{ width: '50px', fontSize: '12px', borderRadius: '4px', color: 'common.white', backgroundColor: params.value === 'open' ? '#ffa726' : params.value === 'close' ? '#4db6ac' : '#ef5350' }} />
               <Box sx={{
                  '& .MuiTextField-root': { mr: 1, width: '12ch', borderRadius: '4px', color: 'common.white', backgroundColor: params.value === 'open' ? '#ffa726' : params.value === 'close' ? '#4db6ac' : '#ef5350' },
                  '& .MuiSelect-select': { color: 'common.white', fontSize: '12px' },
                  '& fieldset': { border: 'none' },
                  '& svg': { color: 'common.white' }
               }}>
                  < TextField label="" select defaultValue="open" size="small" onChange={() => handleStatus(params)}>
                     <MenuItem value='open'>Open</MenuItem>
                     <MenuItem value='fixed'>Fixed</MenuItem>
                     <MenuItem value='reopen'>Reopen</MenuItem>
                     <MenuItem value='close'>Close</MenuItem>
                     <MenuItem value='hold'>Hold</MenuItem>
                     <MenuItem value='working'>Working</MenuItem>
                     <MenuItem value='stuck'>Stuck</MenuItem>
                     <MenuItem value='qa'>Assign to QA</MenuItem>
                  </TextField>
               </Box>
            );
         }
      },
      {
         field: 'ts_priority', headerName: 'Priority', width: width > 1800 ? 150 : width > 1440 ? 100 : 100, sortable: false, hide: false,
         renderCell: (params) => {
            return (
               <Box sx={{
                  '& .MuiTextField-root': { mr: 1, width: '12ch', borderRadius: '4px' },
                  '& .MuiSelect-select': { fontSize: '12px' },
                  '& fieldset': { border: '1px solid rgba(0,0,0,0.12)' },
               }}>
                  < TextField label="" select defaultValue="normal" size="small" onChange={() => handleStatus(params)}>
                     <MenuItem value='normal'>Normal</MenuItem>
                     <MenuItem value='medium'>Medium</MenuItem>
                     <MenuItem value='high'>High</MenuItem>
                  </TextField>
               </Box>
               // <Chip label={params.value} size="small" sx={{ width: '60px', fontSize: '12px', borderRadius: '4px', color: 'common.white', backgroundColor: params.value === 'medium' ? '#ffa726' : params.value === 'normal' ? '#4db6ac' : '#ef5350' }} />
            );
         }
      },
      {
         field: 'ts_type', headerName: 'Type', width: width > 1800 ? 150 : width > 1440 ? 100 : 100, sortable: false,
         renderCell: (params) => {
            return (
               <Box sx={{
                  '& .MuiTextField-root': { mr: 1, width: '12ch', borderRadius: '4px' },
                  '& .MuiSelect-select': { fontSize: '12px' },
                  '& fieldset': { border: '1px solid rgba(0,0,0,0.12)' },
               }}>
                  < TextField label="" select defaultValue="launch" size="small" onChange={() => handleStatus(params)}>
                     <MenuItem value='bug'>Bug</MenuItem>
                     <MenuItem value='design'>Design</MenuItem>
                     <MenuItem value='development'>Development</MenuItem>
                     <MenuItem value='db-strucutre'>DB Structure</MenuItem>
                     <MenuItem value='launch'>Launch</MenuItem>
                  </TextField>
               </Box>
               // <Chip label={params.value} size="small" sx={{ width: '60px', fontSize: '12px', borderRadius: '4px', color: 'common.white', backgroundColor: params.value === 'medium' ? '#ffa726' : params.value === 'normal' ? '#4db6ac' : '#ef5350' }} />
            );
         }
      },
      {
         field: 'pr_actions', headerName: 'Actions', width: width > 1800 ? 180 : 180, sortable: false,
         renderCell: () => {
            return (
               <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ cursor: "pointer" }}
               >
                  <ActionIcons index={1} />
               </div>
            );
         }
      },
   ];
   return (
      <Container sx={{ maxWidth: { xs: 'initial' }, pt: { xs: '25px', lg: 0 }, px: 0 }}>

         <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h1" component="h1" sx={{ color: 'common.black', mb: 0, fontFamily: "'Hind', sans-serif" }}>Tasks</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}>

               <Box sx={{ display: 'inline-flex', mr: 1 }}>
                  <TextField
                     label="Search tasks"
                     id="outlined-start-adornment"
                     size="small"
                     sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.12)' } }}
                     InputProps={{
                        endAdornment: <SearchIcon sx={{ fontSize: '18px' }} />,
                     }}
                  />
               </Box>

               <Box sx={{ '& .MuiTextField-root': { mr: 1, width: '15ch' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.12)' } }}>
                  <TextField label="Projects" select size="small" defaultValue="">
                     <MenuItem value='react-js'>React JS</MenuItem>
                     <MenuItem value='laraval'>Laraval</MenuItem>
                     <MenuItem value='php'>PHP</MenuItem>
                  </TextField>
               </Box>

               <Box sx={{
                  '& .MuiTextField-root': { mr: 1, width: '15ch' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.12)' }
               }}>
                  < TextField label="Status" select defaultValue="" size="small" >
                     <MenuItem value='open'>Open</MenuItem>
                     <MenuItem value='close'>Close</MenuItem>
                     <MenuItem value='hold'>Hold</MenuItem>
                  </TextField>
               </Box>

               <Box sx={{ '& .MuiTextField-root': { mr: 1, width: '15ch' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.12)' } }}>
                  <TextField label="Time" select size="small" defaultValue="">
                     <MenuItem value='today'>Today</MenuItem>
                     <MenuItem value='overdue'>Overdue</MenuItem>
                     <MenuItem value='current-week'>Current Week</MenuItem>
                     <MenuItem value='last-week'>Last Week</MenuItem>
                     <MenuItem value='current-month'>Current Month</MenuItem>
                  </TextField>
               </Box>
               <Box>
                  <Button variant="contained" startIcon={<AddIcon sx={{ fontSize: "16px", m: 0 }} />} color="active" onClick={() => setIsDrawerOpen(true)} sx={{ height: '37px' }}><Typography variant="body1" component="span" sx={{ color: 'common.white', mt: '2px', textTransform: 'capitalize' }}>Task</Typography></Button>
               </Box>
            </Box >

         </Box >

         <Grid container spacing={2} sx={{ height: 'calc(100vh - 225px)', mt: 0, ml: 0, width: '100%' }}>
            <DataGrid rowHeight={50} rows={rows} columns={columns} disableSelectionOnClick disableColumnFilter checkboxSelection disableColumnMenu pageSize={10} rowsPerPageOptions={[10]}
               components={{
                  BaseCheckbox: RedesignCheckbox,
               }}
               getRowClassName={(params) => `super-app-theme--${params.row.ts_status} spaceVertial`}
            />
         </Grid>

         <Drawer variant="temporary" anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <NewProject />
         </Drawer>
      </Container >
   )
}

export default Tasks;