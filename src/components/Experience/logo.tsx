// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box } from '@mui/material';

export type LogoProps = {
  src?: string;
  width: number;
};

export default function Logo(props: LogoProps) {
  const { src, width } = props;

  return (
    <Box
      sx={{
        alignItems: 'center',
        aspectRatio: '1 / 1',
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'center',
        width: width,
      }}
    >
      {src && (
        <Box
          component="img"
          loading="lazy"
          src={src}
          sx={{
            height: '100%',
            objectFit: 'contain',
            width: '100%',
          }}
        />
      )}
    </Box>
  );
}
