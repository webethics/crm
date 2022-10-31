import React from 'react';
import { Container, Box, Grid, Typography, Checkbox, IconButton, FormControlLabel, Tooltip, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { styled } from '@mui/material/styles';

import CreateIcon from '@mui/icons-material/Create';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import useViewport from '../../utils/useViewport';


const ActionIcons = ({ index }) => {
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


// const actions = [
//    {icon: <CreateIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Edit' },
//    {icon: <FavoriteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Favorite' },
//    {icon: <PersonIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Employees assigned to this project.' },
//    {icon: <ChatIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Chat' },
//    {icon: <DownloadIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Download Attachments' },
//    {icon: <DeleteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Delete' },
// ];

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





// const CustomChip = styled(Chip)`
//    height: 24px;
//    margin-right: 4px;
//    background-color: ${props => props.theme.palette.primary.light};
//    color: ${props => props.theme.palette.primary.dark};
//    font-size:12px;
//    font-weight: 500;
//    margin-top: 8px;

//    height: auto;
//    position: relative;

//    svg {
//       cursor:pointer;
//       font-size: 13px;
//       font-weight: 500;
//       margin-left: 0!important;
//       position: absolute;
//       left:10px;
//       transition: all 0.4s;
//       color: ${props => props.theme.palette.primary.dark}!important;
//       ~  span {
//          padding-left: 24px;
//       }
//    }
//    &.status-tab {
//       span {
//          background-color: ${props => props.theme.palette.primary.dark};
//          color:${props => props.theme.palette.common.white};
//       }
//    }
//    span {
//       padding-left: 10px;
//       padding-right: 10px;
//       text-transform: uppercase;
//       font-size: 10px;
//       font-weight: 600;
//       letter-spacing: 0.3px;
//       display: flex;
//       flex-wrap: wrap;
//       align-items: center;
//       justify-content: center;
//       height: 30px;
//       padding-left: 16px;
//       padding-right: 16px;
//       border-radius:50px;
//       transition: all 0.4s;
//    }
//    ${props => props.theme.breakpoints.up("lg")} {
//       // &.status-tab {
//       //    &:hover {
//       //       background-color: ${props => props.theme.palette.primary.dark};
//       //       color:${props => props.theme.palette.common.white};
//       //    }
//       // }
//       svg {
//          &:hover {
//             color:#ffffff!important;
//          ~ span {
//                background-color: ${props => props.theme.palette.red[400]};
//                color:${props => props.theme.palette.common.white};
//                svg {
//                   color: ${props => props.theme.palette.common.white}!important;
//                }
//             }
//          }
//       }
//    }
// `;

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

// const PaperWrap = styled('div')`
// border-radius: 4px;
// border: 1px solid rgba(0, 0, 0, 0.12);
// position: relative;
// background-color: ${props => props.theme.palette.common.white};
//    ${props => props.theme.breakpoints.up("lg")} {
//       &:hover {
//          .MuiCheckbox-root {
//             &:not(.Mui-checked) {
//                border-color: ${props => props.theme.palette.sidebar.iconText};
//                &:after {
//                   background-color: ${props => props.theme.palette.sidebar.iconText};
//                }
//             }
//          }
//          .iconWrap {
//             > div {
//                opacity: 1;
//             }
//          }
//       }
//    }
// `;

// const IconWrap = styled('div')`
//    box-sizing: border-box;
//    display: flex;
//    flex-wrap: wrap;
//    align-items: center;
//    justify-content: flex-end;
//    margin-left: auto;
// `;

// const CustomSpeedDial = styled(SpeedDial)`
//    border-radius:4px;
//    transition: opacity 0.25s;
//    padding: 0;
//    &:hover {
//       color: #2e8b57;
//    }
//    ${props => props.theme.breakpoints.up("lg")} {
//       opacity:0;
//    }
//   .MuiFab-root {
//       box-shadow: none;
//       border-radius: 0;
//       ${props => props.theme.breakpoints.up("lg")} {
//          &:hover {
//             svg {
//                color:${props => props.theme.palette.primary.dark};
//             }
//          }
//       }
//    }
//    >.MuiFab-root {
//       width: auto;
//       height: auto;
//       box-shadow: none;
//       border-radius: 0;
//       min-height:initial;
//       background-color:transparent;
//       ${props => props.theme.breakpoints.up("xs")} {
//          display: none;
//       }
//       &:hover {
//          background-color:transparent;
//       }
//    }

//   .MuiSpeedDial-actions {
//    margin:0;
//    padding: 0;
//    padding: 0;
//    .MuiFab-root {
//       margin:0;
//       min-height:25px;
//       height:25px;
//       width: 25px;
//       &:active {
//          box-shadow: none;
//       }
//       background-color:transparent;
//          &:not(:first-of-type) {
//             border-top: none;
//          }
//      }
//   }
// `;
const Projects = () => {
   const { width } = useViewport();
   const columns = [
      {
         field: 'pr_title', headerName: 'Project Title', width: width > 1800 ? 400 : width > 1440 ? 300 : 225, sortable: false, hideable: false,
         renderCell: (params) => (
            <Typography component="div" variant="" sx={{}}>
               <Typography component="span" variant="body2" sx={{ display: 'block' }}> {params.value}</Typography>
               <Typography component="span" variant="body2" sx={{ display: 'block', fontSize: '12px' }}> 17/Oct/2022</Typography>
            </Typography>
         ),
      },
      { field: 'pr_client_name', headerName: 'Client Name', width: width > 1800 ? 250 : width > 1440 ? 175 : 180, sortable: false },
      { field: 'pr_upwork_account_id', headerName: 'Upwork Account ID', width: width > 1800 ? 250 : width > 1440 ? 175 : 175, sortable: false },
      { field: 'pr_contract_name', headerName: 'Contract Name', width: width > 1800 ? 250 : width > 1440 ? 225 : 225, sortable: false },
      {
         field: 'col6', headerName: 'Actions', width: width > 1800 ? 150 : 150, sortable: false,
         renderCell: (params) => {
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

         <Typography component="div" sx={{ color: 'primary.dark', mb: 2, mx: 2, pr: 2, fontFamily: "'Hind', sans-serif", display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <Typography variant="h1" component="h1" sx={{ color: 'primary.dark', mb: 0, fontFamily: "'Hind', sans-serif" }}>Projects</Typography>
            <Button variant="contained" startIcon={<AddIcon sx={{ fontSize: "16px" }} />} color="active">
               Projects
            </Button>
            {/* <Tooltip title="Add New Project" arrow placement="top">
               <IconButton color="active">
                  <AddIcon />
               </IconButton>
            </Tooltip> */}
         </Typography>

         <Grid container spacing={2} sx={{ px: { xs: 2 }, height: 'calc(100vh - 225px)', mt: 0 }}>
            <DataGrid sx={{ mx: 2 }} rows={rows} columns={columns} disableColumnFilter checkboxSelection disableColumnMenu pageSize={15} rowsPerPageOptions={[15]}
               components={{
                  BaseCheckbox: RedesignCheckbox,
               }}
            />


            {/* <Grid item xs={12} sm={6} md={4} xl={4} xxl={3}>
               <PaperWrap elevation={0} sx={{ p: 3 }}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>

                     <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', width: '100%', pb: 2 }}>
                        <RedesignCheckbox size="small" sx={{ color: 'sidebar.label', display: 'inline-flex' }} />
                        <IconWrap className='iconWrap'>
                           <CustomSpeedDial
                              ariaLabel="SpeedDial basic example"
                              icon={<MoreVertIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />}
                              direction='left'
                              open={true}
                           >
                              {actions.map((action) => (
                                 <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    arrow
                                 />
                              ))}
                           </CustomSpeedDial>
                        </IconWrap>
                        <CustomChip label="Active" className='status-tab' sx={{ cursor: 'pointer', mt: 0, mr: 0 }} />
                     </Box>
                     <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '100%' }, pb: 3, position: 'relative', }}>
                        <NavLink className="projectTitle"><Typography component="div" sx={{ fontWeight: '600', color: 'primary.dark', fontFamily: "'Hind',sans-serif", fontSize: '15px' }}>Webethics CRM Designs</Typography></NavLink>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.4, fontSize: '14px', mt: 0.5, fontFamily: "'Hind',sans-serif", letterSpacing: '0.2px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                     </Box>

                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%' }}>
                        <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: '13px', fontWeight: '500', textTransform: 'uppercase' }}>Categories</Typography>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.25, fontSize: '13px' }}>Web Development, RWD Designs, Graphic Designs</Typography>
                     </Box>
                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', pt: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: '13px', fontWeight: '500', textTransform: 'uppercase' }}>Client Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: '13px' }}>Mr. Dallas</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: '13px', fontWeight: '500', textTransform: 'uppercase' }}>Account ID</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: '13px' }}>Mrs. Anita Sharma</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', my: 2 }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: '13px', fontWeight: '500', textTransform: 'uppercase' }}>Contract Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: '13px' }}>CRM Designs</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: '100%' }}>
                           <CustomChip icon={<CloseIcon sx={{ fontSize: "16px" }} />} label="CRM Designs" />
                           <CustomChip icon={<CloseIcon sx={{ fontSize: "16px" }} />} label="React JS" />
                           <CustomChip icon={<CloseIcon sx={{ fontSize: "16px" }} />} label="React MUI" />
                           <CustomChip icon={<CloseIcon sx={{ fontSize: "16px" }} />} label="Designs" />
                           <CustomChip icon={<CloseIcon sx={{ fontSize: "16px" }} />} label="MUI" />
                           <CustomChip icon={<CloseIcon sx={{ fontSize: "16px" }} />} label="JS" />
                        </Box>
                     </Box>
                  </Grid>
               </PaperWrap>
            </Grid> */}
         </Grid >
      </Container >
   )
}

export default Projects;