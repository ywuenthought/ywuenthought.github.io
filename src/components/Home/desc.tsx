// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

type DescProps = {
  descriptions: string[];
  greeting: string;
  title: string;
  sx?: SxProps<Theme>;
};

export default function Desc(props: DescProps) {
  const { descriptions, greeting, title, sx = {} } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        ...sx,
      }}
    >
      <Stack direction="column" spacing={2}>
        <Typography gutterBottom variant="h3">
          {greeting}
        </Typography>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        {descriptions.map((desc, index) => (
          <Typography key={`home:descs:${index}`} variant="body1">
            {desc}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
