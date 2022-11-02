import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Badge, Typography, Avatar } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GirlIcon from '@mui/icons-material/Girl';
import FolderIcon from '@mui/icons-material/Folder';
import MessageIcon from '@mui/icons-material/Message';
import DeleteIcon from '@mui/icons-material/Delete';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
   return (
      <>
         <Box sx={{ boxSizing: 'border-box', position: 'fixed', top: 0, backgroundColor: 'common.white', left: 0, right: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', py: 2, pr: 2, pl: '240px', zIndex: 9, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>

            <Box sx={{ width: "200px", maxWidth: "100%", minWidth: "200px", boxSizing: "border-box" }}>
               <Avatar alt="Webethics Solutions Pvt. Ltd." src={Logo} variant="rounded" sx={{ width: "100%", height: 'auto', }} />
            </Box>

            <Box>
               <Badge badgeContent={0} max={99} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <ShowChartIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>Sales</Typography>
               </Badge>
               <Badge badgeContent={0} max={100} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <GirlIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>HR</Typography>
               </Badge>
               <Badge badgeContent={99} max={100} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <FolderIcon sx={{ color: 'primary.dark', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'primary.dark', fontSize: '13px', fontWeight: '500' }}>PM</Typography>
               </Badge>
               <Badge badgeContent={0} max={100} color="primary" sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <MessageIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>Chat</Typography>
               </Badge>
            </Box>

            {/* <Box>
               <NavLink sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <ShowChartIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>Sales</Typography>
               </NavLink>
               <NavLink sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <GirlIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>HR</Typography>
               </NavLink>
               <NavLink sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <FolderIcon sx={{ color: 'primary.dark', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'primary.dark', fontSize: '13px', fontWeight: '500' }}>PM</Typography>
               </NavLink>
               <NavLink sx={{ flexDirection: 'column', alignItems: 'center', mx: 2 }}>
                  <MessageIcon sx={{ color: 'sidebar.iconText', fontSize: '18px' }} />
                  <Typography component="div" sx={{ color: 'sidebar.iconText', fontSize: '13px', fontWeight: '500' }}>Chat</Typography>
               </NavLink>
            </Box> */}
         </Box>
      </>
   )
}

export default Header;