import { createTheme } from '@mui/material';
const theme = createTheme(
   {
      // Change the Font Family
      typography: {
         fontFamily: "'Hind', sans-serif",
         h1: {
            fontFamily: "'Roboto', sans-serif"
         },
         h2: {
            fontFamily: "'Roboto', sans-serif"
         },
         h3: {
            fontFamily: "'Roboto', sans-serif"
         },
         h4: {
            fontFamily: "'Roboto', sans-serif"
         },
         h5: {
            fontFamily: "'Roboto', sans-serif"
         },
         h6: {
            fontFamily: "'Roboto', sans-serif"
         },
         body1: {
            fontSize: '14px',
            color: '#62636a'
         }
      },
      palette: {
         primary: {
            main: '#1eade6',
         },
         sidebar: {
            label: '#acaeb4',
            iconText: '#7a7e9e',
         },
      },
      // shadows: {
      //    sidebar: '0px 5px 10px 1px #acaeb4',
      // },
      components: {
         // Disable Ripple Effect
         MuiButtonBase: {
            defaultProps: {
               disableRipple: true,
            },
         },
      },
   }
);
export default theme;