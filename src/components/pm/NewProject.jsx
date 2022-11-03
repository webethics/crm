import { Box, Typography, TextField, Autocomplete, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import React from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import PanToolIcon from '@mui/icons-material/PanTool';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { Formik, Form, Field, useField } from 'formik';
import { Editor } from '@tinymce/tinymce-react';
import * as Yup from 'yup';

const NewProject = () => {

   const initialValues = {
      project_name: '',
      client: '',
      contract: '',
      upwork_account: '',
      assign_to: [],
      category: [],
      tags: [],
      status: '',
   }

   const validationSchema = Yup.object({
      project_name: Yup.string().required().max(50, 'Project name should be 50 characters long.'),
      client: Yup.string().required(),
      contract: Yup.string().required(),
      upwork_account: Yup.string().required(),
      assign_to: Yup.array().required().min(1, 'Please assign project to atleast one employee.'),
      category: Yup.array().required().min(1, 'Please add atleast one tag.'),
      tags: Yup.array().required().min(1, 'Please add atleast one tag.'),
      status: Yup.string().required(),
   });

   const onSubmit = (values) => {
      console.log(values)
   }

   const top100Films = [
      { label: 'The Shawshank Redemption', year: 1994 },
      { label: 'The Godfather', year: 1972 },
      { label: 'The Godfather: Part II', year: 1974 },
      { label: 'The Dark Knight', year: 2008 },
      { label: '12 Angry Men', year: 1957 },
      { label: "Schindler's List", year: 1993 },
      { label: 'Pulp Fiction', year: 1994 },
      { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { label: 'Goodfellas', year: 1990 },
      { label: 'The Matrix', year: 1999 },
      { label: 'Seven Samurai', year: 1954 },
      { label: 'The Great Dictator', year: 1940 },
      { label: 'Cinema Paradiso', year: 1988 },
      { label: 'The Lives of Others', year: 2006 },
      { label: 'Grave of the Fireflies', year: 1988 },
      { label: 'Paths of Glory', year: 1957 },
      { label: 'Django Unchained', year: 2012 },
      { label: 'The Shining', year: 1980 },
      { label: 'WALL·E', year: 2008 },
      { label: 'American Beauty', year: 1999 },
      { label: 'The Dark Knight Rises', year: 2012 },
      { label: 'Princess Mononoke', year: 1997 },
      { label: 'Aliens', year: 1986 },
      { label: 'Oldboy', year: 2003 },
      { label: 'Once Upon a Time in America', year: 1984 },
      { label: 'Witness for the Prosecution', year: 1957 },
      { label: 'Das Boot', year: 1981 },
      { label: 'Citizen Kane', year: 1941 },
      { label: 'North by Northwest', year: 1959 },
      { label: 'Vertigo', year: 1958 },
   ];

   const assignTo = [
      { id: 1, name: 'Mr. Harsh Vardhan' },
      { id: 2, name: 'Mr. Kamal Kant' },
      { id: 3, name: 'Mr. Rajesh Sharma' },
      { id: 4, name: 'Mr. Sanjay Midha' },
      { id: 5, name: 'Mr. Sandeep Kamra' },
      { id: 6, name: 'Mr. Sahil Gupta' },
      { id: 7, name: 'Sr. Satwinder Singh' },
      { id: 8, name: 'Mr. Sandeep Sharma' },
      { id: 9, name: 'Mr. Vishal Rajput' },
   ];

   const project_status = [
      { id: 1, label: 'Open' },
      { id: 2, label: 'Close' },
      { id: 3, label: 'Hold' },
   ];

   const EditorField = (props) => {
      const { label, name, ...otherProps } = props;
      const [field, meta] = useField(name);
      const type = 'text';
      const handleEditorChange = (value, _editor) => {
         field.onChange({ target: { type, name, value } });
      };

      const handleBlur = (e, editor) => {
         field.onBlur({ target: { name } });
      };

      return (
         <>
            {label && <label>{label}</label>}
            <Editor apiKey='g5uajw6wz2t70fsrwtuvzjch92qrc2ki98xpclr0e8l0hgr7' init={{ height: 250, menubar: false }} {...otherProps} value={field.value} onEditorChange={handleEditorChange} onBlur={handleBlur}></Editor>
            {meta.touched && meta.error ? (
               <div className="error">{meta.error}</div>
            ) : null}
         </>
      );
   };

   return (
      <Box sx={{ p: 4, maxWidth: '500px', width: '500px', boxSizing: 'border-box' }}>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
               formik => {
                  return (
                     <Form style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography variant="h1" component="h1" sx={{ color: 'common.black', mb: 0, fontFamily: "'Hind', sans-serif", mb: 2 }}>Add New Project</Typography>

                        <Box sx={{ width: '100%' }}>
                           <Field name="project_name">
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel htmlFor={field.name} sx={{ mb: 0.5 }}>Project Title</FormLabel>
                                          <TextField variant="outlined" size="small" fullWidth  {...field} id={field.name} sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }} />
                                       </FormControl>
                                    )
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '49%' }}>
                           <Field name="client">
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel htmlFor={field.name} sx={{ mb: 0.5 }}>Client</FormLabel>
                                          <TextField select size="small" defaultValue="" fullWidth id={field.name} sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}>
                                             <MenuItem value='dallas'>Mr. Dallas</MenuItem>
                                             <MenuItem value='melissa'>Mr. Mellisa</MenuItem>
                                          </TextField>
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '49%' }}>
                           <Field name="contract">
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel htmlFor={field.name} sx={{ mb: 0.5 }}>Contract</FormLabel>
                                          <TextField select size="small" defaultValue="" fullWidth id={field.name} sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}>
                                             <MenuItem value='dallas'>Education Website</MenuItem>
                                             <MenuItem value='melissa'>Ecommerce Websites</MenuItem>
                                             <MenuItem value='melissa'>React JS Application</MenuItem>
                                             <MenuItem value='melissa'>Quiz App in Vue JS</MenuItem>
                                          </TextField>
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <Field name="upwork_account">
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel htmlFor={field.name} sx={{ mb: 0.5 }}>Upwork Account ID</FormLabel>
                                          <TextField select size="small" defaultValue="" fullWidth id={field.name} sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}>
                                             <MenuItem value='dallas'>Mr. Harsh Vardhan</MenuItem>
                                             <MenuItem value='melissa'>Mr. Kamal Kant</MenuItem>
                                             <MenuItem value='melissa'>Mr. Rajesh Sharma</MenuItem>
                                             <MenuItem value='melissa'>Mr. Sanjay Midha</MenuItem>
                                             <MenuItem value='melissa'>Ms. Anita Sharma</MenuItem>
                                          </TextField>
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <Field>
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel sx={{ mb: 0.5 }}>Assign To</FormLabel>
                                          <Autocomplete
                                             multiple
                                             limitTags={2}
                                             options={assignTo}
                                             getOptionLabel={(option) => option.name}
                                             defaultValue={[assignTo[1], assignTo[2], assignTo[3]]}
                                             sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}
                                             renderInput={(params) => <TextField {...params} size="small" fullWidth {...field} id={field.name} />}
                                          />
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '100%' }}>

                           <FormControl sx={{ mb: 2, width: '100%' }}>
                              <FormLabel sx={{ mb: 0.5 }}>Description</FormLabel>
                              <EditorField name="description" />
                           </FormControl>

                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <Field>
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel sx={{ mb: 0.5 }}>Category</FormLabel>
                                          <Autocomplete
                                             multiple
                                             limitTags={2}
                                             options={top100Films}
                                             getOptionLabel={(option) => option.label}
                                             defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                                             sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}
                                             renderInput={(params) => <TextField {...params} size="small" fullWidth {...field} id={field.name} />}
                                          />
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <Field name="tags">
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel htmlFor={field.name} sx={{ mb: 0.5 }}>Tags</FormLabel>
                                          <Autocomplete
                                             multiple
                                             limitTags={2}
                                             options={top100Films}
                                             sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}
                                             renderInput={(params) => <TextField {...params} size="small" fullWidth  {...field} id={field.name} />}
                                          />
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <Field name="status">
                              {
                                 ({ field }) => {
                                    return (
                                       <FormControl sx={{ mb: 2, width: '100%' }}>
                                          <FormLabel htmlFor={field.name} sx={{ mb: 0.5 }}>Status</FormLabel>
                                          <Autocomplete
                                             options={project_status}
                                             sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}
                                             renderInput={(params) => <TextField {...params} size="small" fullWidth  {...field} id={field.name} />}
                                          />
                                       </FormControl>
                                    );
                                 }
                              }
                           </Field>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <LocalizationProvider dateAdapter={AdapterMoment}>
                              <Field name="deadline">
                                 {
                                    ({ field, form }) => {
                                       // console.log(field)
                                       return (
                                          <FormControl sx={{ mb: 2, width: '100%' }}>
                                             <FormLabel sx={{ mb: 0.5 }}>Deadline</FormLabel>
                                             <TextField
                                                id={field.name}
                                                type="date"
                                                size="small"
                                                {...field}
                                                sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.12)' } }}
                                                value={field.value ? field.value : '2017-05-24'}
                                             // onChange={val => form.setFieldValue(field.name, val)}
                                             />
                                          </FormControl>
                                       )
                                    }
                                 }
                              </Field>
                           </LocalizationProvider>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                           <LocalizationProvider dateAdapter={AdapterMoment}>
                              <Field name="deadline">
                                 {
                                    ({ field, form }) => {
                                       // console.log(field)
                                       return (
                                          <FormControl sx={{ mb: 2, width: '100%' }}>
                                             <FormLabel sx={{ mb: 0.5 }}>Upload Attachments</FormLabel>
                                             <Button variant="contained" component="label" sx={{ backgroundColor: "transparent", color: '#62636a', boxShadow: 'none', border: '1px solid rgba(0,0,0,0.12)', width: '100%', height: '100px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', textTransform: 'capitalize', fontWeight: '400', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                                                <FileUploadIcon />
                                                Upload Attachments
                                                <input hidden accept="image/*" multiple type="file" />
                                             </Button>
                                          </FormControl>
                                       )
                                    }
                                 }
                              </Field>
                           </LocalizationProvider>
                        </Box>


                        <Box sx={{ width: '100%' }}>
                           <Button variant="contained" color="active" fullWidth disabled={!formik.isValid} sx={{ shadow: 'none' }}>
                              Create a new project
                           </Button>
                        </Box>
                     </Form>
                  )
               }
            }
         </Formik >
      </Box >
   )
}

export default NewProject;