// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box } from '@mui/material';

import { itemLists, scenes } from './const';
import Item from './item';
import Scene from './scene';

export default function Experience() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {itemLists.map((items, index) => (
        <Box
          key={`experience:items:${index}`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            height: 400,
            pb: index !== itemLists.length - 1 ? 4 : 0,
          }}
        >
          <Scene {...scenes[index]} sx={{ height: '100%' }} />
          <Box sx={{ height: '100%', textAlign: 'left' }}>
            {items.map((item, innerIndex) => (
              <Item
                {...item}
                key={`experience:items:${index}:${innerIndex}`}
                sx={{ pb: innerIndex !== items.length - 1 ? 2 : 0 }}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
