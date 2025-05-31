import './App.css';

import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Experience from './components/Experience';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import { ROUTES } from './const';

function App() {
  return (
    <>
      <Header />
      <Box component="main">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
