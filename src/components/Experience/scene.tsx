// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, type SxProps, type Theme } from '@mui/material';

export type SceneProps = {
  src?: string;
  sx?: SxProps<Theme>;
};

export default function Scene(props: SceneProps) {
  const { src, sx = {} } = props;

  return (
    <Box
      sx={{
        alignItems: 'center',
        aspectRatio: '3 / 2',
        display: 'flex',
        flexShrink: 0,
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
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 100,
            height: '100%',
            maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
            objectFit: 'contain',
            width: '100%',
          }}
        />
      )}
    </Box>
  );
}
