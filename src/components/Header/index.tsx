// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/const';

import ThemeController, { type ThemeControllerProps } from './theme';

type HeaderProps = {
  theme: ThemeControllerProps;
  sx?: SxProps<Theme>;
};

export default function Header(props: HeaderProps) {
  const { theme, sx = {} } = props;

  return (
    <AppBar color="default" elevation={0} position="fixed" sx={{ ...sx }}>
      <Toolbar>
        {Object.entries(ROUTES).map(([name, path]) => (
          <Button
            color="inherit"
            component={Link}
            key={`header:${name.toLowerCase()}`}
            sx={{ textTransform: 'none', mx: 1 }}
            to={path}
          >
            {name}
          </Button>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <ThemeController {...theme} />
      </Toolbar>
    </AppBar>
  );
}
