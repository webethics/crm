import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material';

const MuiSwitch = () => {
   const [checked, setChecked] = useState(false);
   const handleMode = (e) => setChecked(e.target.checked);
   console.log(checked);

   return (
      <Box>
         <FormControlLabel label="Dark Mode" control={<Switch size="small" color="secondary" checked={checked} onChange={handleMode} />} />
      </Box>
   )
}

export default MuiSwitch;