// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, IconButton, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';
import React, { useRef } from 'react';

type SliderProps = {
  children: ReactNode;
  cardWidth: number;
  sx?: SxProps<Theme>;
};

export default function Slider(props: SliderProps) {
  const { children, cardWidth, sx = {} } = props;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current?.scrollBy({ behavior: 'smooth', left: scrollAmount });
  };

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <IconButton
        onClick={() => scroll('left')}
        sx={{
          left: '-10%',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowLeft />
      </IconButton>
      <IconButton
        onClick={() => scroll('right')}
        sx={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowRight />
      </IconButton>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          width: cardWidth,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Box key={`travels:slider:children${index}`}>{child}</Box>
        ))}
      </Box>
    </Box>
  );
}
