// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Menu } from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/const';

import ThemeController, { type ThemeControllerProps } from './theme';

type HeaderProps = {
  theme: ThemeControllerProps;
  sx?: SxProps<Theme>;
};

export default function Header(props: HeaderProps) {
  const { theme, sx = {} } = props;

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar color="default" elevation={0} position="fixed" sx={{ ...sx }}>
        <Toolbar>
          <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <ThemeController {...theme} />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 200 }} onClick={() => setDrawerOpen(false)}>
          <List>
            {Object.entries(ROUTES).map(([name, path]) => (
              <ListItem key={`header:${name.toLowerCase()}`}>
                <ListItemButton
                  color="inherit"
                  component={Link}
                  sx={{ textTransform: 'none', mx: 1 }}
                  to={path}
                >
                  {name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
