import React from 'react';
import { Box, Badge, Typography } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GirlIcon from '@mui/icons-material/Girl';
import FolderIcon from '@mui/icons-material/Folder';
import MessageIcon from '@mui/icons-material/Message';
import DeleteIcon from '@mui/icons-material/Delete';

const Header = () => {
   return (
      <Box sx={{ boxSizing: 'border-box', position: 'fixed', top: 0, backgroundColor: 'common.white', left: 0, right: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', py: 2, px: 2, zIndex: 9, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
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
   )
}

export default Header;