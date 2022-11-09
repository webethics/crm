import { createTheme } from '@mui/material';
const theme = createTheme(
   {
      // shadows: "none",
      breakpoints: {
         values: {
            xs: 0,
            sm: 767,
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
            fontSize: '18px',
            fontWeight: '500',
            marginBottom: '20px',
         },
         h2: {
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '10px',
         },
         body1: {
            fontSize: '14px',
            color: '#62636a'
         }
      },
      palette: {
         // primary: {
         //    main: '#1eade6',
         //    dark: '#1579a1',
         //    light: '#c9ebf9'
         // },
         // primary: {
         //    main: '#1579a1',
         //    light: '#57a8d2',
         //    dark: '#004d72',
         // },
         primary: {
            main: '#1eade6',
            light: '#6bdfff',
            dark: '#007eb4',
         },
         common: {
            black: '#313636',
            white: '#ffffff'
         },
         active: {
            light: '#757ce8',
            main: '#1579a1',
            dark: '#1579a1',
            contrastText: '#fff',
         },
         sidebar: {
            // label: '#acaeb4',
            label: '#999999',
            // iconText: '#7a7e9e',
            iconText: '#000000',
            icon: '#000000'
         },
         red: {
            300: '#e57373',
            400: '#ef5350',
         },
         blue: {
            300: '#64b5f6',
            400: '#42a5f5',
         },
         teal: {
            300: '#4db6ac',
            400: '#26a69a',
         },
         indigo: {
            300: '#7986cb',
            400: '#5c6bc0'
         },
         amber: {
            300: '#ffd54f',
            400: '#ffca28',
         },
         bogus: {
            50: '#e3f4f6',
            100: '#b9e3ea',
            200: '#8bd1dc',
            300: '#5dbecd',
            400: '#3ab0c3',
            500: '#17a2b8',
            600: '#149ab1',
            700: '#1190a8',
            800: '#0d86a0',
            900: '#077591',
            A100: '#bef0ff',
            A200: '#8be4ff',
            A400: '#58d9ff',
            A700: '#3fd3ff',
         },
         content: {
            main: '#62636a',
            light: '#818288',
            dark: '#45454a'
         },
         // content: {
         //    main: '',
         //    light: '',
         //    dark: '',
         // }
      },
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