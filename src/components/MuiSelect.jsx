import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
   const [selectOptions, setSelectOptions] = useState('');
   const [selectOptionsArray, setSelectOptionsArray] = useState([]);
   const handleSelectOptions = (e) => setSelectOptions(e.target.value);
   const handleSelectOptionsArray = (e) => setSelectOptionsArray(e.target.value);
   console.log(selectOptionsArray);
   return (
      <Box width="250px">
         {/* Select the single value */}
         <TextField label="Textfield as Select" value={selectOptions} onChange={handleSelectOptions} select fullWidth>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austria</MenuItem>
         </TextField>

         {/* Select the multiple values */}
         <TextField
            label="Textfield as Select"
            value={selectOptionsArray}
            onChange={handleSelectOptionsArray}
            size="small"
            color="secondary"
            helperText={selectOptionsArray.length === 0 ? 'required' : 'Please select your country'}
            select
            fullWidth
            error={selectOptionsArray.length === 0}
            SelectProps={{
               multiple: true
            }}>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austria</MenuItem>
            <MenuItem value="PAK">Pakistan</MenuItem>
            <MenuItem value="UK">England</MenuItem>
         </TextField>
      </Box>
   )
}

export default MuiSelect;