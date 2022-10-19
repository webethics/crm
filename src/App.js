import './App.css';
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


function App() {
  return (
    <ThemeProvider theme={createTheme}>
      <div className="App">
        <Layout />
      </div>
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
        <Route path="projects" element={<Projects />}>
          <Route path="category" element={<Category />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="credentials" element={<Credentials />} />
        </Route>

        {/* User */}
        <Route path="user" element={<Profile />} />

        {/* Marketing */}
        <Route path="sales" element={<Sales />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
