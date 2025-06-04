// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import './App.css';

import { Box, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import type { ThemeControllerProps } from './components/Header/theme';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Travels from './components/Travels';
import { ROUTES } from './const';

type AppProps = {
  theme: ThemeControllerProps;
};

function App(props: AppProps) {
  const { theme } = props;

  return (
    <>
      <Header theme={theme} />
      <Box component="main">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <Box>
                <Toolbar />
                <Home />
                <Footer />
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
          <Route
            path={ROUTES.PROJECTS}
            element={
              <Box>
                <Toolbar />
                <Projects />
              </Box>
            }
          />
          <Route
            path={ROUTES.PUBLICATIONS}
            element={
              <Box>
                <Toolbar />
                <Publications />
              </Box>
            }
          />
          <Route
            path={ROUTES.TRAVELS}
            element={
              <Box>
                <Toolbar />
                <Travels />
              </Box>
            }
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
