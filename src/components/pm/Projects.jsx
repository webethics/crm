import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Checkbox, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
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

const actions = [
   { icon: <CreateIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Edit' },
   { icon: <FavoriteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Favorite' },
   { icon: <PersonIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Employees assigned to this project.' },
   { icon: <ChatIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Chat' },
   { icon: <DownloadIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Download Attachments' },
   { icon: <DeleteIcon sx={{ color: 'sidebar.iconText', fontSize: '16px' }} />, name: 'Delete' },
];

const CustomChip = styled(Chip)`
   height: 24px;
   margin-right: 4px;
   background-color: ${props => props.theme.palette.primary.light};
   color: ${props => props.theme.palette.primary.dark};
   font-size:12px;
   font-weight: 500;
   margin-left: auto;
   cursor:pointer;
   margin-top: 8px;
   svg {
      font-size: 13px;
      font-weight: 500;
      margin-right: -8px!important;
      color: ${props => props.theme.palette.primary.dark}!important;
   }
   span {
      padding-left: 10px;
      padding-right: 10px;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.3px;
   }
`;

const RedesignCheckbox = styled(Checkbox)`
   padding:0;
   border-radius: 0;
   position: absolute;
   top:5px;
   left:5px;
   width: 15px;
   height: 15px;
   overflow: hidden;
   border-radius: 2px;
   border: 1px solid rgba(0,0,0,0.12);
   &:after {
      content:'';
      position: absolute;
      width:90%;
      height:90%;
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

const PaperWrap = styled('div')`
border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0.12);
position: relative;
background-color: ${props => props.theme.palette.common.white};
   ${props => props.theme.breakpoints.up("lg")} {
      &:hover {
         border-color: ${props => props.theme.palette.primary.dark};
         .MuiCheckbox-root {
            border-color: ${props => props.theme.palette.primary.dark};
            &:after {
               background-color: ${props => props.theme.palette.primary.dark};
            }
         }
         .iconWrap {
            > div {
               opacity: 1;
            }
         }
      }
   }
`;

const IconWrap = styled('div')`
   box-sizing: border-box;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: flex-end;
   position: absolute;
   top: 50px;
   right: 14px;
`;

const CustomSpeedDial = styled(SpeedDial)`
   opacity:0;
   border-radius:4px;
   padding: 5px;
   transition: opacity 0.25s;
   &:hover {
      color: #2e8b57;
   }
  .MuiFab-root {
      box-shadow: none;
      border-radius: 0;
      ${props => props.theme.breakpoints.up("lg")} {
         &:hover {
            svg {
               color:${props => props.theme.palette.primary.dark};
            }
         }
      }
   }
   >.MuiFab-root {
      width: auto;
      height: auto;   
      box-shadow: none;
      border-radius: 0;
      min-height:initial;
      background-color:transparent;
      ${props => props.theme.breakpoints.up("lg")} {
         display: none;
      }
      &:hover {
         background-color:transparent;
      }
   }

  .MuiSpeedDial-actions {
   margin:0;
   padding: 0;
   padding: 0;
   .MuiFab-root {
      margin:0;
      min-height:25px;
      height:25px;
      width: 25px;
      &:active {
         box-shadow: none;
      }
      background-color:transparent;
         &:not(:first-of-type) {
            border-top: none;
         }
     }
  }
`;


const Projects = () => {
   const [status, setStatus] = useState('');

   const handleChange = (event) => {
      setStatus(event.target.value);
   };

   return (
      <Container sx={{ maxWidth: { xs: 'initial' }, pt: { xs: '25px', lg: 0 }, px: 0 }}>
         <Typography variant="h1" component="h1" sx={{ color: 'primary.dark', mb: 1, px: 2, fontFamily: "'Hind', sans-serif" }}>Projects</Typography>

         <Grid container spacing={2} sx={{ px: { xs: 2 } }}>
            <Grid item xs={12} sm={6} md={4} xl={4} xxl={3}>
               <PaperWrap elevation={0} sx={{ p: 3 }}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: 'column' }}>

                     <RedesignCheckbox size="small" sx={{ color: 'sidebar.label' }} />
                     <CustomChip label="Active" sx={{ position: 'absolute', right: '20px', zIndex: 3, cursor: 'pointer', mt: 0 }} />
                     {/* <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">Status</InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={status}
                              label="Status"
                              onChange={handleChange}
                              sx={{
                                 backgroundColor: 'primary.light',
                              }}
                           >
                              <MenuItem value={10}>Open</MenuItem>
                              <MenuItem value={20}>Close</MenuItem>
                              <MenuItem value={30}>Hold</MenuItem>
                           </Select>
                        </FormControl>
                     </Box> */}
                     <IconWrap className='iconWrap'>
                        <CustomSpeedDial
                           ariaLabel="SpeedDial basic example"
                           icon={<MoreVertIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />}
                           direction="down"
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

                     <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '100%' }, pb: 3, position: 'relative', }}>
                        <NavLink className="projectTitle"><Typography component="div" sx={{ fontWeight: '600', color: 'primary.dark', fontFamily: "'Roboto',sans-serif", fontSize: '15px', pr: '60px' }}>Webethics CRM Designs Webethics CRM Designs Webethics CRM Designs</Typography></NavLink>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.4, fontSize: '13px', mt: 0.5, fontFamily: "'Roboto',sans-serif", letterSpacing: '0.2px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                     </Box>

                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%' }}>
                        <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Categories</Typography>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Web Development, RWD Designs, Graphic Designs</Typography>
                     </Box>
                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', pt: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Client Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mr. Dallas</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Account ID</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mrs. Anita Sharma</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', my: 2 }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Contract Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>CRM Designs</Typography>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={4} xxl={3}>
               <PaperWrap elevation={0} sx={{ p: 3 }}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: 'column' }}>

                     <RedesignCheckbox size="small" sx={{ color: 'sidebar.label' }} />
                     <CustomChip label="Active" sx={{ position: 'absolute', right: '20px', zIndex: 3, cursor: 'pointer', mt: 0 }} />
                     {/* <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">Status</InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={status}
                              label="Status"
                              onChange={handleChange}
                              sx={{
                                 backgroundColor: 'primary.light',
                              }}
                           >
                              <MenuItem value={10}>Open</MenuItem>
                              <MenuItem value={20}>Close</MenuItem>
                              <MenuItem value={30}>Hold</MenuItem>
                           </Select>
                        </FormControl>
                     </Box> */}
                     <IconWrap className='iconWrap'>
                        <CustomSpeedDial
                           ariaLabel="SpeedDial basic example"
                           icon={<MoreVertIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />}
                           direction="down"
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

                     <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '100%' }, pb: 3, position: 'relative', }}>
                        <NavLink className="projectTitle"><Typography component="div" sx={{ fontWeight: '600', color: 'primary.dark', fontFamily: "'Roboto',sans-serif", fontSize: '15px', pr: '60px' }}>Webethics CRM Designs Webethics CRM Designs Webethics CRM Designs</Typography></NavLink>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.4, fontSize: '13px', mt: 0.5, fontFamily: "'Roboto',sans-serif", letterSpacing: '0.2px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                     </Box>

                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%' }}>
                        <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Categories</Typography>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Web Development, RWD Designs, Graphic Designs</Typography>
                     </Box>
                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', pt: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Client Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mr. Dallas</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Account ID</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mrs. Anita Sharma</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', my: 2 }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Contract Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>CRM Designs</Typography>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={4} xxl={3}>
               <PaperWrap elevation={0} sx={{ p: 3 }}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: 'column' }}>

                     <RedesignCheckbox size="small" sx={{ color: 'sidebar.label' }} />
                     <CustomChip label="Active" sx={{ position: 'absolute', right: '20px', zIndex: 3, cursor: 'pointer', mt: 0 }} />
                     {/* <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">Status</InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={status}
                              label="Status"
                              onChange={handleChange}
                              sx={{
                                 backgroundColor: 'primary.light',
                              }}
                           >
                              <MenuItem value={10}>Open</MenuItem>
                              <MenuItem value={20}>Close</MenuItem>
                              <MenuItem value={30}>Hold</MenuItem>
                           </Select>
                        </FormControl>
                     </Box> */}
                     <IconWrap className='iconWrap'>
                        <CustomSpeedDial
                           ariaLabel="SpeedDial basic example"
                           icon={<MoreVertIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />}
                           direction="down"
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

                     <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '100%' }, pb: 3, position: 'relative', }}>
                        <NavLink className="projectTitle"><Typography component="div" sx={{ fontWeight: '600', color: 'primary.dark', fontFamily: "'Roboto',sans-serif", fontSize: '15px', pr: '60px' }}>Webethics CRM Designs Webethics CRM Designs Webethics CRM Designs</Typography></NavLink>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.4, fontSize: '13px', mt: 0.5, fontFamily: "'Roboto',sans-serif", letterSpacing: '0.2px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                     </Box>

                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%' }}>
                        <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Categories</Typography>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Web Development, RWD Designs, Graphic Designs</Typography>
                     </Box>
                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', pt: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Client Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mr. Dallas</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Account ID</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mrs. Anita Sharma</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', my: 2 }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Contract Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>CRM Designs</Typography>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={4} xxl={3}>
               <PaperWrap elevation={0} sx={{ p: 3 }}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: { xs: 'center', lg: 'flex-start' }, flexDirection: 'column' }}>

                     <RedesignCheckbox size="small" sx={{ color: 'sidebar.label' }} />
                     <CustomChip label="Active" sx={{ position: 'absolute', right: '20px', zIndex: 3, cursor: 'pointer', mt: 0 }} />
                     {/* <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">Status</InputLabel>
                           <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={status}
                              label="Status"
                              onChange={handleChange}
                              sx={{
                                 backgroundColor: 'primary.light',
                              }}
                           >
                              <MenuItem value={10}>Open</MenuItem>
                              <MenuItem value={20}>Close</MenuItem>
                              <MenuItem value={30}>Hold</MenuItem>
                           </Select>
                        </FormControl>
                     </Box> */}
                     <IconWrap className='iconWrap'>
                        <CustomSpeedDial
                           ariaLabel="SpeedDial basic example"
                           icon={<MoreVertIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />}
                           direction="down"
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

                     <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '100%' }, pb: 3, position: 'relative', }}>
                        <NavLink className="projectTitle"><Typography component="div" sx={{ fontWeight: '600', color: 'primary.dark', fontFamily: "'Roboto',sans-serif", fontSize: '15px', pr: '60px' }}>Webethics CRM Designs Webethics CRM Designs Webethics CRM Designs</Typography></NavLink>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.4, fontSize: '13px', mt: 0.5, fontFamily: "'Roboto',sans-serif", letterSpacing: '0.2px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                     </Box>

                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%' }}>
                        <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Categories</Typography>
                        <Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Web Development, RWD Designs, Graphic Designs</Typography>
                     </Box>
                     <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', pt: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Client Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mr. Dallas</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: { xl: '50%' } }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Account ID</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>Mrs. Anita Sharma</Typography>
                        </Box>
                        <Box component="div" sx={{ boxSizing: 'border-box', width: '100%', my: 2 }}>
                           <Typography component="div" sx={{ color: 'sidebar.label', lineHeight: 1.25, fontSize: { xs: '12px', lg: '11px' }, fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Contract Name</Typography>
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontWeight: 500, lineHeight: 1.25, fontSize: { xs: '13px', lg: '12px' } }}>CRM Designs</Typography>
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
            </Grid>
         </Grid >
      </Container >
   )
}

export default Projects;