// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Stack } from '@mui/material';

import { itemLists, scenes } from './const';
import Item from './item';
import Scene from './scene';

export default function Experience() {
  return (
    <Stack direction="column" spacing={4}>
      {itemLists.map((items, index) => (
        <Box
          key={`experience:items:${index}`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            height: 400,
          }}
        >
          <Scene {...scenes[index]} sx={{ height: '100%' }} />
          <Stack
            direction="column"
            spacing={2}
            sx={{ height: '100%', textAlign: 'left' }}
          >
            {items.map((item, innerIndex) => (
              <Item {...item} key={`experience:items:${index}:${innerIndex}`} />
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
