import React, { useState } from 'react'
import { Box, FormControlLabel, FormHelperText, Checkbox, FormGroup, FormLabel, FormControl } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const MuiCheckbox = () => {
   const [term, setTerm] = useState(false);
   const [skills, setSkills] = useState([]);
   console.log(skills);

   const handleTerm = (e) => {
      setTerm(e.target.checked);
   }
   const handleSkills = (e) => {
      const index = skills.indexOf(e.target.value);
      if (index === -1) {
         setSkills([...skills, e.target.value]);
      }
      else {
         setSkills(skills.filter(skill => skill !== e.target.value));
      }
   }

   return (
      <Box>
         <FormControlLabel control={<Checkbox onChange={handleTerm} checked={term} />} label="I accept the terms and conditions." />
         <Checkbox icon={<BookmarkBorderOutlinedIcon />} checkedIcon={<BookmarkOutlinedIcon />} size="small" color="secondary" />

         <FormControl error={skills.length === 0}>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
               <FormControlLabel control={<Checkbox checked={skills.includes('html')} onChange={handleSkills} size="small" />} label="HTML" value="html" />
               <FormControlLabel control={<Checkbox checked={skills.includes('css')} onChange={handleSkills} color="secondary" />} label="CSS" value="css" />
            </FormGroup>
            {
               skills.length === 0 &&
               <FormHelperText>Invalid Selection</FormHelperText>
            }
         </FormControl>

      </Box>
   )
}

export default MuiCheckbox;