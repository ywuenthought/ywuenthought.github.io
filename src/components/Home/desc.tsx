// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

type DescProps = {
  description: string;
  greeting: string;
  title: string;
  sx?: SxProps<Theme>;
};

export default function Desc(props: DescProps) {
  const { description, greeting, title, sx = {} } = props;

  return (
    <Box
      sx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        ...sx,
      }}
    >
      <Typography gutterBottom variant="h3">
        {greeting}
      </Typography>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}
