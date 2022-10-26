import { createTheme } from '@mui/material';
const theme = createTheme(
   {
      breakpoints: {
         values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1440,
            xxl: 1600,
            xxxl: 1800,
         },
      },
      // Change the Font Family
      typography: {
         fontFamily: "'Hind', sans-serif",
         h1: {
            fontFamily: "'Roboto', sans-serif",
            fontSize: '18px',
            fontWeight: '500',
            marginBottom: '20px',
         },
         h2: {
            fontFamily: "'Roboto', sans-serif",
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '10px',
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
            dark: '#1579a1',
            light: '#c9ebf9'
         },
         sidebar: {
            label: '#acaeb4',
            iconText: '#7a7e9e',
         },
      },
      // shadows: {
      //    sidebars: '0px 5px 10px 1px #acaeb4',
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