// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Stack } from '@mui/material';

import { ITEMS } from './const';
import Item from './item';

export default function Projects() {
  return (
    <Stack spacing={4} sx={{ textAlign: 'left' }}>
      {ITEMS.map((item, index) => (
        <Item
          {...item}
          key={`projects:items:${index}`}
          sx={{ minWidth: 400 }}
        />
      ))}
    </Stack>
  );
}
