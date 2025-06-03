// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import { dateTimes, scenes } from './const';
import Scene from './scene';
import Slider from './slider';

export default function Travels() {
  const [index, setIndex] = useState(0);

  return (
    <Box>
      <Typography variant="body1">{dateTimes[index]}</Typography>
      <Slider cardWidth={700} indexState={{ index, setIndex }}>
        {scenes.map((scene, index) => (
          <Scene
            {...scene}
            key={`travels:scenes:${index}`}
            sx={{ width: 700 }}
          />
        ))}
      </Slider>
      <Typography variant="body1">tmp</Typography>
    </Box>
  );
}
