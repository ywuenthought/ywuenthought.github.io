// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { dateTimes, locations, scenes } from './const';
import Scene from './scene';
import Slider from './slider';

const UNIT_VALUE = 40;

export default function Travels() {
  const [index, setIndex] = useState(0);
  const [vw, setVW] = useState(() => window.innerWidth / 100);

  useEffect(() => {
    const handleResize = () => setVW(window.innerWidth / 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box>
      <Typography sx={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', mb: 1 }}>
        {dateTimes[index]}
      </Typography>
      <Slider cardWidth={UNIT_VALUE * vw} indexState={{ index, setIndex }}>
        {scenes.map((scene, index) => (
          <Scene
            {...scene}
            key={`travels:scenes:${index}`}
            sx={{ width: `${UNIT_VALUE}vw` }}
          />
        ))}
      </Slider>
      <Typography
        sx={{
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
          mt: 1,
          whiteSpace: 'normal',
          width: UNIT_VALUE * vw,
          wordBreak: 'break-word',
        }}
      >
        {locations[index]}
      </Typography>
    </Box>
  );
}
