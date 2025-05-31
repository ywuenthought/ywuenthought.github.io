// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box } from '@mui/material';

import hero from '@/assets/hero.png';

import { DESCRIPTION, GREETING, TITLE } from './const';
import Desc from './desc';
import Hero from './hero';

export default function Home() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'row',
          height: 500,
        }}
      >
        <Hero src={hero} sx={{ height: '100%', width: '30%' }} />
        <Desc
          description={DESCRIPTION}
          greeting={GREETING}
          title={TITLE}
          sx={{ height: '100%' }}
        />
      </Box>
    </Box>
  );
}
