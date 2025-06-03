// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

export type SceneProps = {
  src: string;
  sx?: SxProps<Theme>;
};

export default function Scene(props: SceneProps) {
  const { src, sx = {} } = props;

  return (
    <Box
      sx={{
        aspectRatio: '3 / 2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Box
        component="img"
        loading="lazy"
        src={src}
        sx={{
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
          objectFit: 'contain',
          width: '100%',
        }}
      />
    </Box>
  );
}
