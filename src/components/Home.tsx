// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Toolbar, Typography } from '@mui/material';

import hero from '../assets/hero.png';

export default function Home() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Toolbar />
      <Box
        component="img"
        src={hero}
        sx={{
          borderRadius: '50%',
          height: '30%',
          mb: 4,
          objectFit: 'contain',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
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
