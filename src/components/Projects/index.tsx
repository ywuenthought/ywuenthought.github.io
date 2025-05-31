// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Stack, Typography } from '@mui/material';

import { ACADEMIC_ITEMS, INDUSTRIAL_ITEMS } from './const';
import Item from './item';

export default function Projects() {
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Typography align="left" fontWeight="bold" variant="h5" sx={{ pb: 1 }}>
          INDUSTRIAL
        </Typography>
      </Box>
      <Stack spacing={4} mb={6}>
        {INDUSTRIAL_ITEMS.map((item, index) => (
          <Item key={`projects:industrial:items:${index}`} {...item} />
        ))}
      </Stack>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Typography align="left" fontWeight="bold" variant="h5" sx={{ pb: 1 }}>
          ACADEMIC
        </Typography>
      </Box>
      <Stack spacing={4} mb={6}>
        {ACADEMIC_ITEMS.map((item, index) => (
          <Item key={`projects:academic:items:${index}`} {...item} />
        ))}
      </Stack>
    </Box>
  );
}
