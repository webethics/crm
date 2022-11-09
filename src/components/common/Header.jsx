import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Badge, Typography, Avatar, ButtonGroup, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, ListItemAvatar, ListSubheader, Collapse } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GirlIcon from '@mui/icons-material/Girl';
import FolderIcon from '@mui/icons-material/Folder';
import MessageIcon from '@mui/icons-material/Message';
import UserFace from '../../assets/images/user-face.jpg';

const Header = () => {
   const defaultState = { sales: false, hr: false, pm: false, chat: false };
   const [open, setOpen] = useState(defaultState);
   const handleClick = (active) => {
      setOpen(prev => ({ defaultState, [active]: !prev[active] }))
   }

   const handleClickAway = () => {
      setOpen(defaultState);
   };

   return (
      <>
         <Box sx={{ boxSizing: 'border-box', position: 'fixed', top: 0, backgroundColor: 'common.white', left: 0, right: 0, py: 2, pr: 2, pl: { lg: '240px' }, zIndex: 9, borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', }}>

            {/* <Box sx={{ width: "200px", maxWidth: "100%", minWidth: "200px", boxSizing: "border-box" }}>
               <Avatar alt="Webethics Solutions Pvt. Ltd." src={Logo} variant="rounded" sx={{ width: "100%", height: 'auto', }} />
            </Box> */}

            <Box className='header-notifications-bar' sx={{ width: '100%', maxWidth: 360, position: 'relative', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', }}>
               <ClickAwayListener onClickAway={handleClickAway}>
                  <List sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', p: 0 }} component="nav" aria-labelledby="nested-list-subheader">

                     <ListItemButton sx={{ p: 0 }} className={open.sales ? 'active' : ''} onClick={() => { handleClick('sales') }}>
                        <Badge badgeContent={0} max={99} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2, cursor: 'pointer' }}>
                           <ShowChartIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>Sales</Typography>
                        </Badge>
                     </ListItemButton>

                     <Collapse in={open.sales} timeout="auto" unmountOnExit sx={{ position: 'absolute', top: '54px', width: 360 }}>
                        <List sx={{ width: '100%', backgroundColor: 'common.white', py: 0, borderRadius: '0 0 4px 4px', width: '100%', border: '1px solid rgba(0,0,0,0.12)', transition: 'all 0.4s ease-in-out', zIndex: 2 }}>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Remy Sharp" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Just now</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Harsh Vardhan</Typography>
                                       {" — Updated the finance manager dashboard task. "}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Travis Howard" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Few minutes ago</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Kamal Kant</Typography>
                                       {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Cindy Baker" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Yesterday</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Sandeep Kamra</Typography>
                                       {' — Completed the design part of dashboard and project listing… '}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>
                        </List>
                     </Collapse>

                     <ListItemButton onClick={() => { handleClick('hr') }} sx={{ p: 0 }} className={open.hr ? 'active' : ''}>
                        <Badge badgeContent={0} max={100} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2, cursor: 'pointer' }}>
                           <GirlIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>HR</Typography>
                        </Badge>
                     </ListItemButton>
                     <Collapse in={open.hr} timeout="auto" unmountOnExit sx={{ position: 'absolute', top: '54px', width: 360 }}>
                        <List sx={{ width: '100%', backgroundColor: 'common.white', py: 0, borderRadius: '0 0 4px 4px', width: '100%', border: '1px solid rgba(0,0,0,0.12)', transition: 'all 0.4s ease-in-out', zIndex: 2 }}>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Remy Sharp" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Just now</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Harsh Vardhan</Typography>
                                       {" — Updated the finance manager dashboard task. "}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Travis Howard" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Few minutes ago</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Kamal Kant</Typography>
                                       {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Cindy Baker" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Yesterday</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Sandeep Kamra</Typography>
                                       {' — Completed the design part of dashboard and project listing… '}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>
                        </List>
                     </Collapse>

                     <ListItemButton onClick={() => { handleClick('pm') }} sx={{ p: 0 }} className={open.pm ? 'active' : ''}>
                        <Badge badgeContent={99} max={100} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2, cursor: 'pointer' }}>
                           <FolderIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>PM</Typography>
                        </Badge>
                     </ListItemButton>
                     <Collapse in={open.pm} timeout="auto" unmountOnExit sx={{ position: 'absolute', top: '54px', width: 360 }}>
                        <List sx={{ width: '100%', backgroundColor: 'common.white', py: 0, borderRadius: '0 0 4px 4px', width: '100%', border: '1px solid rgba(0,0,0,0.12)', transition: 'all 0.4s ease-in-out', zIndex: 2 }}>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Remy Sharp" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Just now</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Harsh Vardhan</Typography>
                                       {" — Updated the finance manager dashboard task. "}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Travis Howard" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Few minutes ago</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Kamal Kant</Typography>
                                       {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Cindy Baker" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Yesterday</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Sandeep Kamra</Typography>
                                       {' — Completed the design part of dashboard and project listing… '}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>
                        </List>
                     </Collapse>

                     <ListItemButton onClick={() => { handleClick('chat') }} sx={{ p: 0 }} className={open.chat ? 'active' : ''}>
                        <Badge badgeContent={0} max={100} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2, cursor: 'pointer' }}>
                           <MessageIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                           <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>Chat</Typography>
                        </Badge>
                     </ListItemButton>
                     <Collapse in={open.chat} timeout="auto" unmountOnExit sx={{ position: 'absolute', top: '54px', width: 360 }}>
                        <List sx={{ width: '100%', backgroundColor: 'common.white', py: 0, borderRadius: '0 0 4px 4px', width: '100%', border: '1px solid rgba(0,0,0,0.12)', transition: 'all 0.4s ease-in-out', zIndex: 2 }}>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Remy Sharp" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Just now</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Harsh Vardhan</Typography>
                                       {" — Updated the finance manager dashboard task. "}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Travis Howard" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Few minutes ago</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Kamal Kant</Typography>
                                       {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>

                           <ListItem alignItems="center">
                              <ListItemAvatar sx={{ mt: 0 }}>
                                 <Avatar alt="Cindy Baker" src={UserFace} />
                              </ListItemAvatar>

                              <ListItemText sx={{ m: 0 }}
                                 secondary={<Typography sx={{ fontSize: '13px', color: 'sidebar.iconText' }} component="span">Yesterday</Typography>}
                                 primary={
                                    <React.Fragment>
                                       <Typography sx={{ color: 'primary.dark', fontWeight: '500' }} component="span">Mr. Sandeep Kamra</Typography>
                                       {' — Completed the design part of dashboard and project listing… '}
                                    </React.Fragment>
                                 }
                              />

                           </ListItem>
                        </List>
                     </Collapse>

                  </List>
               </ClickAwayListener>

            </Box>
         </Box>
      </>
   )
}

export default Header;