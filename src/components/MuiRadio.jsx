import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';

const MuiRadio = () => {
   const [year, setYear] = useState('0-2'); // Make it empty string to see an helperText as an error however by default one of its value will be selected so we do not need to show an error here.
   const yearOfExperience = (e) => {
      setYear(e.target.value);
   }
   console.log(year);

   return (
      <Box>
         <FormControl error={!year}>
            <FormLabel id="job-experience-group-label">Years of experience</FormLabel>
            <RadioGroup name="job-experience-group" aria-labelledby='job-experience-group-label' value={year} onChange={yearOfExperience} row>
               <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
               <FormControlLabel control={<Radio />} label="2-4" value="2-4" />
               <FormControlLabel control={<Radio />} label="4-6" value="4-6" />
            </RadioGroup>
            {
               !year &&
               <FormHelperText>Invalid Selection</FormHelperText>
            }
         </FormControl>
      </Box>
   )
}

export default MuiRadio;