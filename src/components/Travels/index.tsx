// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Typography } from '@mui/material';

import { dateTimes, scenes } from './const';
import Scene from './scene';
import Slider from './slider';

export default function Travels() {
  return (
    <Slider cardWidth={700}>
      {scenes.map((scene, index) => (
        <Box key={`travels:items:${index}`} sx={{ width: 700 }}>
          <Typography variant="body1">{dateTimes[index]}</Typography>
          <Scene {...scene} />
          <Typography variant="body1">tmp</Typography>
        </Box>
      ))}
    </Slider>
  );
}
