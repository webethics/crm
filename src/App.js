import './App.css';
import { Box } from '@mui/material';
import Layout from './components/Layout';
import createTheme from './createTheme';
import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/analytics/Dashboard';
import Settings from './components/analytics/Settings';
import Team from './components/analytics/Team';

import Employees from './components/hr/Employees';
import Questions from './components/hr/Questions';
import Interviews from './components/hr/Interviews';

import Projects from './components/pm/Projects';
import Category from './components/pm/Category';
import Tasks from './components/pm/Tasks';
import Credentials from './components/pm/Credentials';

import Profile from './components/user/Profile';
import Sales from './components/marketing/Sales';
import Sidebar from './components/common/Sidebar';
import BottomMenus from './components/common/BottomMenus';
import Header from './components/common/Header';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  return (
    <ThemeProvider theme={createTheme}>
      <Box component="div" className="App" sx={{ boxSizing: 'border-box', pt: { xs: location.pathname === '/' ? "120px" : "70px", lg: '120px' }, pl: { xs: '0', lg: '240px!important' }, pb: { xs: '100px', lg: 0 }, pr: { xs: 0, lg: '15px' } }}>
        <Header />
        <Sidebar />
        <Layout />
        <Routes>
          {/* Analytics */}
          <Route path="/" element={<Dashboard />}>
            <Route path="settings" element={<Settings />} />
            <Route path="team" element={<Team />} />
          </Route>

          {/* HR */}
          <Route path="employees" element={<Employees />}>
            <Route path="questions" element={<Questions />} />
            <Route path="interviews" element={<Interviews />} />
          </Route>

          {/* PM */}
          <Route path="projects" element={<Projects />} />
          <Route path="category" element={<Category />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="credentials" element={<Credentials />} />

          {/* User */}
          <Route path="user" element={<Profile />} />

          {/* Marketing */}
          <Route path="sales" element={<Sales />} />
        </Routes>
        <BottomMenus />
      </Box>
    </ThemeProvider >
  );
}

export default App;
