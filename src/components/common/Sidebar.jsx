import React, { useState } from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Badge, Switch, ListItemAvatar, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PasswordIcon from '@mui/icons-material/Password';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EditIcon from '@mui/icons-material/Edit';

import Logo from '../../assets/images/logo.svg';
import Owner from '../../assets/images/owner.png';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [openProfile, setOpenProfile] = useState(false);

   const handleListItemClick = (index) => {
      setSelectedIndex(index);
   };

   const handleClick = () => {
      setOpenProfile(!openProfile);
   };

   return (
      <>
         <Drawer hideBackdrop variant="permanent" anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} sx={{ display: { xs: "none", lg: "flex" } }}>
            <Box px={2} sx={{ width: "225px", maxWidth: "100%", minWidth: "225px", flex: 1, boxSizing: "border-box" }} role="presentation" display="flex" flexWrap="wrap" flexDirection="column">
               {/* Sidebar Logo */}
               <Avatar alt="Remy Sharp" src={Logo} variant="rounded" sx={{ pt: 2, pb: 1, width: "100%", display: "flex", height: 'auto', position: 'sticky', top: 0, zIndex: 9, background: 'white' }} />

               {/* Sidebar Menus */}
               {/* Analytics */}
               <List className="sidebar-menus" component="nav" sx={{ pt: 0, pb: 2, width: '100%', flex: 1 }}>
                  <ListItem disablePadding>
                     <Typography variant="h6" component="div" sx={{ px: 2, pb: 2, pt: 5, width: "100%", lineHeight: "inherit" }}>
                        <Typography variant="h6" component="div" sx={{ textTransform: "uppercase", fontSize: "10px", color: "sidebar.label", letterSpacing: 1 }}>Analytics</Typography>
                     </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                     <NavLink to='/' onClick={() => handleListItemClick(0)} className={`${selectedIndex === 0 ? 'Mui-selected sidebar-links' : 'sidebar-links'} `}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <DashboardCustomizeIcon fontSize="small" sx={{ color: selectedIndex === 0 ? 'primary.dark' : 'sidebar.iconText' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 0 ? 'primary.dark' : 'sidebar.iconText' }}>Dashboard</Typography>} sx={{ pt: "2px", m: 0, display: 'block' }} />
                     </NavLink>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#team" sx={{ borderRadius: "3px" }} selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <Diversity3Icon fontSize="small" sx={{ color: selectedIndex === 1 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 1 ? 'primary.dark' : 'sidebar.iconText' }}>Team</Typography>} sx={{ pt: "2px", m: 0, display: 'block' }} />
                     </ListItemButton>
                  </ListItem>

                  {/* Project Management */}
                  <ListItem disablePadding>
                     <Typography variant="h6" component="div" sx={{ px: 2, pb: 2, pt: 5, width: "100%" }}>
                        <Typography variant="h6" component="div" sx={{ textTransform: "uppercase", fontSize: "10px", color: "sidebar.label", letterSpacing: 1 }}>Project Management</Typography>
                     </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                     <NavLink to='/projects' onClick={() => handleListItemClick(7)} className={`${selectedIndex === 7 ? 'Mui-selected sidebar-links' : 'sidebar-links'} `}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <FolderCopyIcon fontSize="small" sx={{ color: selectedIndex === 7 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 7 ? 'primary.dark' : 'sidebar.iconText' }}>Projects <Badge badgeContent={100} max={99} sx={{ ml: 3 }}></Badge></Typography>} sx={{ pt: "2px", m: 0 }} />
                     </NavLink>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#category" sx={{ borderRadius: "3px" }} selected={selectedIndex === 8} onClick={() => handleListItemClick(8)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <AccountTreeIcon fontSize="small" sx={{ color: selectedIndex === 8 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 8 ? 'primary.dark' : 'sidebar.iconText' }}>Category</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#tasks" sx={{ borderRadius: "3px" }} selected={selectedIndex === 9} onClick={() => handleListItemClick(9)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <AssignmentIcon fontSize="small" sx={{ color: selectedIndex === 9 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 9 ? 'primary.dark' : 'sidebar.iconText' }}>Tasks</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#credentials" sx={{ borderRadius: "3px" }} selected={selectedIndex === 10} onClick={() => handleListItemClick(10)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <PasswordIcon fontSize="small" sx={{ color: selectedIndex === 10 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 10 ? 'primary.dark' : 'sidebar.iconText' }}>Credentials</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>

                  {/* HR Management */}
                  <ListItem disablePadding>
                     <Typography variant="h6" component="div" sx={{ px: 2, pb: 2, pt: 5, width: "100%" }}>
                        <Typography variant="h6" component="div" sx={{ textTransform: "uppercase", fontSize: "10px", color: "sidebar.label", letterSpacing: 1 }}>HR Management</Typography>
                     </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#interviews" sx={{ borderRadius: "3px" }} selected={selectedIndex === 11} onClick={() => handleListItemClick(11)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <PendingActionsIcon fontSize="small" sx={{ color: selectedIndex === 11 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 11 ? 'primary.dark' : 'sidebar.iconText' }}>Interviews</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#questions" sx={{ borderRadius: "3px" }} selected={selectedIndex === 12} onClick={() => handleListItemClick(12)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <HelpCenterIcon fontSize="small" sx={{ color: selectedIndex === 12 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 12 ? 'primary.dark' : 'sidebar.iconText' }}>Questions</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#employees" sx={{ borderRadius: "3px" }} selected={selectedIndex === 13} onClick={() => handleListItemClick(13)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <PeopleIcon fontSize="small" sx={{ color: selectedIndex === 13 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 13 ? 'primary.dark' : 'sidebar.iconText' }}>Employees</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>


                  {/* Marketing */}
                  <ListItem disablePadding>
                     <Typography variant="h6" component="div" sx={{ px: 2, pb: 2, pt: 5, width: "100%" }}>
                        <Typography variant="h6" component="div" sx={{ textTransform: "uppercase", fontSize: "10px", color: "sidebar.label", letterSpacing: 1 }}>Marketing</Typography>
                     </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#sales" sx={{ borderRadius: "3px" }} selected={selectedIndex === 14} onClick={() => handleListItemClick(14)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <ShowChartIcon fontSize="small" sx={{ color: selectedIndex === 14 ? 'primary.dark' : 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: selectedIndex === 14 ? 'primary.dark' : 'sidebar.iconText' }}>Sales</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>
               </List>

               <List component="nav" sx={{ pt: 2, pb: "5px", marginTop: 'auto', width: "calc(100% + 32px)", marginLeft: "-16px", position: 'sticky', bottom: 0, zIndex: 9, background: 'white', borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
                  {/* boxShadow: '0px 5px 10px 1px #acaeb4', */}
                  <ListItem disablePadding sx={{ marginTop: 'auto', px: 2 }}>
                     <ListItemButton onClick={handleClick} sx={{ justifyContent: "center" }}>
                        <ListItemAvatar sx={{ minWidth: '40px' }}>
                           <Avatar alt="Remy Sharp" src={Owner} variant="rounded" sx={{ width: "35px", height: "35px" }} />
                        </ListItemAvatar>
                        <ListItemText
                           primary={<Typography component="div" sx={{ color: 'primary.main', fontWeight: '500', lineHeight: 1.25, fontSize: '13px' }}>Harsh Vardhan</Typography>}
                           secondary={<Typography component="div" sx={{ color: 'sidebar.iconText', lineHeight: 1, fontSize: '12px' }}>Owner</Typography>}
                           sx={{ m: 0 }} />
                        {openProfile ? <ExpandLess sx={{ color: 'sidebar.iconText' }} /> : <ExpandMore sx={{ color: 'sidebar.iconText' }} />}
                     </ListItemButton>
                  </ListItem>
                  <Collapse in={openProfile} timeout="auto" unmountOnExit sx={{
                     position: "absolute", right: '16px', boxSizing: "border-box", background: (theme) => theme.palette.sidebar.iconText, left: '16px', top: "-22px", zIndex: 9, minWidth: '150px', maxWidth: "100%", margin: "auto", borderRadius: "5px"
                  }}>
                     <List component="div" disablePadding>
                        <ListItemButton component="a" href="#edit-profile" sx={{ borderRadius: "3px", pl: 4 }} onClick={() => handleListItemClick(17)}>
                           <ListItemIcon sx={{ minWidth: "30px" }}>
                              <EditIcon fontSize="small" sx={{ color: 'common.white' }} />
                           </ListItemIcon>
                           <ListItemText primary={<Typography component="span" sx={{ color: 'common.white' }}>Edit Profile</Typography>} sx={{ pt: "2px", m: 0, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }} />
                        </ListItemButton>
                     </List>
                  </Collapse>

                  <ListItem disablePadding sx={{ marginTop: 'auto', px: 2 }}>
                     <ListItemButton component="a" href="#settings" sx={{ borderRadius: "3px", justifyContent: 'center', px: 2 }} onClick={() => handleListItemClick(15)}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <SettingsIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={<Typography component="span" sx={{ color: 'sidebar.iconText' }}>Settings</Typography>} sx={{ pt: "2px", m: 0 }} />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ marginTop: 'auto', px: 2 }}>
                     <ListItemButton component="a" href="#logout" sx={{ borderRadius: "3px", flexDirection: 'row' }} onClick={() => handleListItemClick(16)} className="">
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                           <Tooltip title="" placement="right" arrow>
                              <ExitToAppIcon fontSize="small" sx={{ color: 'sidebar.iconText' }} />
                           </Tooltip>
                        </ListItemIcon>
                        <ListItemText
                           primary={<Typography component="div" sx={{ color: 'sidebar.iconText' }} >Logout</Typography>}
                           secondary={<Typography component="div" sx={{ color: 'sidebar.iconText' }}><Switch size="small" sx={{ color: 'red' }} color="primary" /></Typography>}
                           sx={{ pt: "2px", m: 0, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}
                        />
                     </ListItemButton>
                  </ListItem>
               </List>

            </Box>
         </Drawer>
      </>
   )
}

export default Sidebar;