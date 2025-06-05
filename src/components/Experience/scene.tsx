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
        aspectRatio: '4 / 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box
        component="img"
        loading="lazy"
        src={src}
        sx={{
          borderRadius: 2,
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </Box>
  );
}
