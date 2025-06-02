// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/const';

export default function Header() {
  return (
    <AppBar color="default" elevation={0} position="fixed">
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
      </Toolbar>
    </AppBar>
  );
}
