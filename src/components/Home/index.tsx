// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box } from '@mui/material';

import hero from '@/assets/hero.png';

import { DESCRIPTIONS, GREETING, TITLE } from './const';
import Desc from './desc';
import Hero from './hero';

export default function Home() {
  return (
    <Box
      gap={2}
      padding={4}
      sx={{
        border: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 500,
      }}
    >
      <Hero src={hero} sx={{ width: 300 }} />
      <Desc
        descriptions={DESCRIPTIONS}
        greeting={GREETING}
        title={TITLE}
        sx={{ minWidth: 400 }}
      />
    </Box>
  );
}
