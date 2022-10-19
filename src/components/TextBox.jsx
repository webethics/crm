import React from 'react'
import { Container, Box, Stack, TextField, Divider, InputAdornment } from '@mui/material';
import { useState } from 'react';
const TextBox = () => {
   const [value, setValue] = useState('');
   return (
      //Stack with all the properties and textfield with all the properties
      <Container>
         {/* Simple Fields */}
         {/* <Box> */}
         <Stack spacing={2} direction="row" alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
            <TextField label="Fullname" variant="standard" size="small" color="primary" />
            <TextField label="Fullname" variant="outlined" size="medium" color="secondary" />
         </Stack>
         {/* </Box> */}

         {/* Form related props */}
         <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            <TextField label="Password" type="password" variant="filled" size="large" color="" required helperText="Please don't share your password with anyone." />
            <TextField label="Read Only" variant="outlined" InputProps={{ readOnly: true }} />
         </Stack>

         {/* Input InputAdornment */}
         <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            <TextField label="Start Input InputAdornment" variant="outlined" InputProps={{
               startAdornment: <InputAdornment position="start">$</InputAdornment>
            }} />
            <TextField label="End Input InputAdornment" variant="filled" InputProps={{
               endAdornment: <InputAdornment position="end">$</InputAdornment>
            }} />
         </Stack>

         {/* Input InputAdornment */}
         <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            {/* <TextField label="HelperText with Error" variant="filled"
               required
               value={value}
               error={!value}
               helperText={!value ? 'required' : 'please dont share the password with anyone else.'}
               onChange={(e) => setValue(e.target.value)}
            /> */}
            <TextField label="Field with error" variant="outlined" required error={!value} value={value} helperText={!value ? 'required' : 'password dont share with anyone else.'} onChange={(e) => setValue(e.target.value)} />
         </Stack>
      </Container>
   )
}

export default TextBox;