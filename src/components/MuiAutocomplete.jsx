import React, { useState } from 'react';
import { Box, Autocomplete, TextField } from '@mui/material';

const MuiAutocomplete = () => {
   const [skill, setSkill] = useState(null);
   const [inputValue, setInputValue] = useState('');

   const skills = ['javascript', 'typescript', 'react', 'angular', 'wordpress'];

   const skillOptions = skills.map((skill, index) => ({
      id: index + 1,
      label: skill
   }));

   console.log(skill);

   return (
      <Box spacing={2}>
         {/* <Autocomplete
            value={skill}
            onChange={(e, newValue) => setSkill(newValue)}
            onInputChange={(event, newInputValue) => {
               setInputValue(newInputValue);
            }}
            options={skills}
            freeSolo //This is equal to the onInputChange event
            renderInput={(params) => <TextField {...params} label="Skills" />}
         /> */}
         <Autocomplete
            options={skillOptions}
            renderInput={(params) => <TextField {...params} label="Skills" />}
            value={skill}
            getOptionSelected={(option, value) => option.id === value.id}
            onChange={(e, newValue) => setSkill(newValue)}
         />
      </Box>
   )
}

export default MuiAutocomplete;