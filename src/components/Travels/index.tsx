// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Stack, Typography } from '@mui/material';

import { dateTimes, locations, scenes } from './const';
import Scene from './scene';

export default function Travels() {
  return (
    <Box>
      {scenes.map((scene, index) => (
        <Stack key={`travels:items:${index}`} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              mb: 1,
              whiteSpace: 'normal',
              width: '50vw',
              wordBreak: 'break-word',
            }}
          >
            {dateTimes[index]} - {locations[index]}
          </Typography>
          <Scene {...scene} sx={{ width: '50vw' }} />
        </Stack>
      ))}
    </Box>
  );
}
