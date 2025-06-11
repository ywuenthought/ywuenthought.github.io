// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: { mode: 'light' },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: '#ffffff' },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: { mode: 'dark' },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: '#121212' },
      },
    },
  },
});
