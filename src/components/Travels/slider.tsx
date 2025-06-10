// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import type { ReactNode } from 'react';
import React, { useRef, useState } from 'react';

type SliderProps = {
  children: ReactNode;
  cardWidth: number;
  sx?: SxProps<Theme>;
  indexState?: {
    index: number;
    setIndex: (index: number) => void;
  };
};

export default function Slider(props: SliderProps) {
  const { children, cardWidth, sx = {}, indexState } = props;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLockRef = useRef<number>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    setIsScrolling(true);
    scrollRef.current.scrollBy({ behavior: 'smooth', left: scrollAmount });
    if (scrollLockRef.current) window.clearTimeout(scrollLockRef.current);
    scrollLockRef.current = window.setTimeout(() => setIsScrolling(false), 400);

    if (indexState) {
      const { index, setIndex } = indexState;

      const count = React.Children.count(children ?? []);
      const rawIndex = index + (direction === 'left' ? -1 : 1);
      const newIndex = Math.max(0, Math.min(rawIndex, count - 1));

      if (newIndex !== index) setIndex(newIndex);
    }
  };

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <IconButton
        disabled={isScrolling}
        onClick={() => scroll('left')}
        sx={{
          left: -50,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowLeft />
      </IconButton>
      <IconButton
        disabled={isScrolling}
        onClick={() => scroll('right')}
        sx={{
          position: 'absolute',
          right: -50,
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
