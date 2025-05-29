// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box } from '@mui/material';

import { ITEMS, LOGOS } from './const';
import Item from './item';
import Logo from './logo';

export default function Experience() {
  return (
    <Box>
      {ITEMS.map((item, index) => (
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          key={`experience:items:${index}`}
          sx={{ py: 2 }}
        >
          <Logo {...LOGOS[index]} />
          <Item {...item} />
        </Box>
      ))}
    </Box>
  );
}
