import './App.css';
import Layout from './components/Layout';
import createTheme from './createTheme';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={createTheme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
