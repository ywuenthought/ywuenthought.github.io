import './App.css';

import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import { ROUTES } from './const';

function App() {
  return (
    <>
      <Header />
      <Box component="main">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
