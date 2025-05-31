// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

type HeroProps = {
  src?: string;
  sx?: SxProps<Theme>;
};

export default function Hero(props: HeroProps) {
  const { src, sx = {} } = props;

  return (
    <Box
      sx={{
        aspectRatio: '1 / 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {src && (
        <Box
          component="img"
          loading="lazy"
          src={src}
          sx={{
            borderRadius: '50%',
            objectFit: 'contain',
            width: '100%',
          }}
        />
      )}
    </Box>
  );
}
