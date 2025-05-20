// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Toolbar, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Toolbar />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography gutterBottom variant="h3">
          Hi, I&apos;m Yifeng Wu.
        </Typography>
        <Typography color="text.secondary" gutterBottom variant="h5">
          Software Developer
        </Typography>
        <Typography sx={{ maxWidth: 600, mb: 3 }} variant="body1">
          I build performant, accessible, and maintainable web applications,
          from backend APIs to frontend interfaces.
        </Typography>
      </Box>
    </Box>
  );
}
