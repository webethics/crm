import React from 'react';
import { Container, Box, Grid, Typography, Checkbox, Tooltip, Button, FormControlLabel, MenuItem, TextField, } from '@mui/material';
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

const ActionIcons = () => {
   const handleEditClick = () => { };
   return (
      <>
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="View Details" arrow placement="top">
                  <VisibilityIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(1)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="Edit Details" arrow placement="top">
                  <CreateIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(1)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="Favorite" arrow placement="top">
                  <FavoriteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(2)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="Mr. Harsh Vardhan" arrow placement="top">
                  <PersonIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(3)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="Chat" arrow placement="top">
                  <ChatIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(4)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="Download Attachments" arrow placement="top">
                  <DownloadIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(5)} />
               </Tooltip>
            }
         />
         <FormControlLabel
            sx={{ ml: 0, mr: 0.5 }}
            control={
               <Tooltip title="Delete" arrow placement="top">
                  <DeleteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} onClick={handleEditClick(6)} />
               </Tooltip>
            }
         />
      </>
   );
};

const rows = [
   { id: 1, pr_title: 'CRM Designs', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Harsh Vardhan', pr_contract_name: 'CRM Designs', },
   { id: 2, pr_title: 'Finance Manager', pr_client_name: 'Mr. Kamal Kant', pr_upwork_account_id: 'Ms. Anita Sharma', pr_contract_name: 'Finance App Screens' },
   { id: 3, pr_title: 'Safe Car', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Sanjay Midha', pr_contract_name: 'React Native App Development' },
   { id: 4, pr_title: 'Unleashed Strippers', pr_client_name: 'Ms. Mel', pr_upwork_account_id: 'Mr. Rajesh Sharma', pr_contract_name: 'Redesign the website' },
   { id: 5, pr_title: 'Webethics Solutions', pr_client_name: 'Mr. Dallas', pr_upwork_account_id: 'Mr. Kamal Kant', pr_contract_name: 'RWD website in React JS' },
   { id: 6, pr_title: 'Auction Marketplace', pr_client_name: 'Mr. Gupta', pr_upwork_account_id: 'Mr. Gupta', pr_contract_name: 'Customer and Client Portal' },
   { id: 7, pr_title: 'CRM Designs', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Harsh Vardhan', pr_contract_name: 'CRM Designs', },
   { id: 8, pr_title: 'Finance Manager', pr_client_name: 'Mr. Kamal Kant', pr_upwork_account_id: 'Ms. Anita Sharma', pr_contract_name: 'Finance App Screens' },
   { id: 9, pr_title: 'Safe Car', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Sanjay Midha', pr_contract_name: 'React Native App Development' },
   { id: 10, pr_title: 'Unleashed Strippers', pr_client_name: 'Ms. Mel', pr_upwork_account_id: 'Mr. Rajesh Sharma', pr_contract_name: 'Redesign the website' },
   { id: 11, pr_title: 'Webethics Solutions', pr_client_name: 'Mr. Dallas', pr_upwork_account_id: 'Mr. Kamal Kant', pr_contract_name: 'RWD website in React JS' },
   { id: 12, pr_title: 'Auction Marketplace', pr_client_name: 'Mr. Gupta', pr_upwork_account_id: 'Mr. Gupta', pr_contract_name: 'Customer and Client Portal' },
   { id: 13, pr_title: 'CRM Designs', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Harsh Vardhan', pr_contract_name: 'CRM Designs', },
   { id: 14, pr_title: 'Finance Manager', pr_client_name: 'Mr. Kamal Kant', pr_upwork_account_id: 'Ms. Anita Sharma', pr_contract_name: 'Finance App Screens' },
   { id: 15, pr_title: 'Safe Car', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Sanjay Midha', pr_contract_name: 'React Native App Development' },
   { id: 16, pr_title: 'Unleashed Strippers', pr_client_name: 'Ms. Mel', pr_upwork_account_id: 'Mr. Rajesh Sharma', pr_contract_name: 'Redesign the website' },
   { id: 17, pr_title: 'Webethics Solutions', pr_client_name: 'Mr. Dallas', pr_upwork_account_id: 'Mr. Kamal Kant', pr_contract_name: 'RWD website in React JS' },
   { id: 18, pr_title: 'Auction Marketplace', pr_client_name: 'Mr. Gupta', pr_upwork_account_id: 'Mr. Gupta', pr_contract_name: 'Customer and Client Portal' },
   { id: 19, pr_title: 'CRM Designs', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Harsh Vardhan', pr_contract_name: 'CRM Designs', },
   { id: 20, pr_title: 'Finance Manager', pr_client_name: 'Mr. Kamal Kant', pr_upwork_account_id: 'Ms. Anita Sharma', pr_contract_name: 'Finance App Screens' },
   { id: 21, pr_title: 'Safe Car', pr_client_name: 'Mr. Harsh Vardhan', pr_upwork_account_id: 'Mr. Sanjay Midha', pr_contract_name: 'React Native App Development' },
   { id: 22, pr_title: 'Unleashed Strippers', pr_client_name: 'Ms. Mel', pr_upwork_account_id: 'Mr. Rajesh Sharma', pr_contract_name: 'Redesign the website' },
   { id: 23, pr_title: 'Webethics Solutions', pr_client_name: 'Mr. Dallas', pr_upwork_account_id: 'Mr. Kamal Kant', pr_contract_name: 'RWD website in React JS' },
   { id: 24, pr_title: 'Auction Marketplace', pr_client_name: 'Mr. Gupta', pr_upwork_account_id: 'Mr. Gupta', pr_contract_name: 'Customer and Client Portal' },
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

const Projects = () => {
   const { width } = useViewport();
   const columns = [
      {
         field: 'pr_title', headerName: 'Project Title', width: width > 1800 ? 400 : width > 1440 ? 300 : 225, sortable: false, hideable: false,
         renderCell: (params) => (
            <Typography component="div" variant="" sx={{}}>
               <Typography component="span" variant="body2" sx={{ display: 'block' }}> {params.value}</Typography>
               <Typography component="span" variant="body2" sx={{ display: 'block', fontSize: '12px', color: 'sidebar.label', letterSpacing: '0.5px' }}> 17/Oct/2022 - 17/Nov/2022</Typography>
            </Typography>
         ),
      },
      { field: 'pr_client_name', headerName: 'Client Name', width: width > 1800 ? 250 : width > 1440 ? 175 : 180, sortable: false },
      { field: 'pr_upwork_account_id', headerName: 'Upwork Account ID', width: width > 1800 ? 250 : width > 1440 ? 175 : 175, sortable: false },
      { field: 'pr_contract_name', headerName: 'Contract Name', width: width > 1800 ? 250 : width > 1440 ? 225 : 225, sortable: false },
      {
         field: 'pr_actions', headerName: 'Actions', width: width > 1800 ? 150 : 150, sortable: false,
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
         <Typography variant="h1" component="h1" sx={{ color: 'common.black', mb: 0, fontFamily: "'Hind', sans-serif", mb: 2, px: 2 }}>Projects</Typography>

         <Box sx={{ pr: 2, mx: 2, mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}>

               <Box sx={{ display: 'inline-flex', mr: 1 }}>
                  <TextField
                     label="Search projects"
                     id="outlined-start-adornment"
                     InputProps={{
                        endAdornment: <SearchIcon sx={{ fontSize: '18px' }} />,
                     }}
                  />
               </Box>

               <Box sx={{ '& .MuiTextField-root': { mr: 1, width: '15ch' } }}>
                  <TextField label="Status" select>
                     <MenuItem value='open'>Open</MenuItem>
                     <MenuItem value='close'>Close</MenuItem>
                     <MenuItem value='hold'>Hold</MenuItem>
                  </TextField>
               </Box>

               <Box sx={{ '& .MuiTextField-root': { mr: 1, width: '15ch' } }}>
                  <TextField label="Category" select>
                     <MenuItem value='react-js'>React JS</MenuItem>
                     <MenuItem value='laraval'>Laraval</MenuItem>
                     <MenuItem value='php'>PHP</MenuItem>
                  </TextField>
               </Box>

               <Box sx={{ '& .MuiTextField-root': { m: 0, width: '15ch' } }}>
                  <TextField label="Clients" select>
                     <MenuItem value='dallas'>Mr. Dallas</MenuItem>
                     <MenuItem value='melissa'>Mr. Mellisa</MenuItem>
                  </TextField>
               </Box>
            </Box>
            <Button variant="contained" startIcon={<AddIcon sx={{ fontSize: "16px" }} />} color="active">
               Projects
            </Button>
         </Box>

         <Grid container spacing={2} sx={{ px: { xs: 2 }, height: 'calc(100vh - 225px)', mt: 0 }}>
            <DataGrid sx={{ mx: 2 }} rowHeight={50} rows={rows} columns={columns} disableColumnFilter checkboxSelection disableColumnMenu pageSize={15} rowsPerPageOptions={[15]}
               components={{
                  BaseCheckbox: RedesignCheckbox,
               }}
            />
         </Grid >
      </Container >
   )
}

export default Projects;