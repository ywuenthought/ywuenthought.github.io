// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { darkTheme, lightTheme } from './components/Header/const.ts';

export default function Root() {
  const [isDark, setMode] = useState(false);

  return (
    <StrictMode>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <App theme={{ isDark, setMode }} />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}
