import './App.css';

import { Box, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import { ROUTES } from './const';

function App() {
  return (
    <>
      <Header />
      <Box component="main">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <Box>
                <Toolbar />
                <Home />
              </Box>
            }
          />
          <Route
            path={ROUTES.EXPERIENCE}
            element={
              <Box>
                <Toolbar />
                <Experience />
              </Box>
            }
          />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route
            path={ROUTES.PUBLICATIONS}
            element={
              <Box>
                <Toolbar />
                <Publications />
              </Box>
            }
          />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
