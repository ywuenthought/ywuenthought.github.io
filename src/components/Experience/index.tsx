// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Stack } from '@mui/material';

import { itemLists, scenes } from './const';
import Item from './item';
import Scene from './scene';

export default function Experience() {
  return (
    <Stack direction="column" spacing={4}>
      {itemLists.map((items, index) => (
        <Stack
          direction="column"
          key={`experience:items:${index}`}
          spacing={2}
          sx={{ textAlign: 'left' }}
        >
          <Scene {...scenes[index]} />
          {items.map((item, innerIndex) => (
            <Item
              {...item}
              key={`experience:items:${index}:${innerIndex}`}
              sx={{ minWidth: 300 }}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
