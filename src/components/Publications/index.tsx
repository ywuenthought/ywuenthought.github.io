// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { ITEMS } from './const';
import Item from './item';

export default function Publications() {
  const [query, setQuery] = useState('');

  const sortedItems = [...ITEMS].sort((item1, item2) => {
    const match1 = item1.title
      .toLocaleLowerCase()
      .includes(query.toLowerCase());
    const match2 = item2.title
      .toLocaleLowerCase()
      .includes(query.toLowerCase());

    if (match1 === match2) return 0;
    return match1 ? -1 : 1;
  });

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        label="Search By Title"
        value={query}
        variant="outlined"
        sx={{ mb: 2 }}
        onChange={(e) => setQuery(e.target.value)}
      />
      {sortedItems.map((item, index) => (
        <Item {...item} key={`publications:items:${index}`} />
      ))}
    </Stack>
  );
}
