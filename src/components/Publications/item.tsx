// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Card, CardContent, Link, Stack, Typography } from '@mui/material';

export type ItemProps = {
  doi: string;
  issue?: number;
  journal: string;
  page: number;
  publisher: string;
  title: string;
  volume: number;
  year: number;
  sx?: SxProps<Theme>;
};

export default function Item(props: ItemProps) {
  const {
    doi,
    issue,
    journal,
    page,
    publisher,
    title,
    volume,
    year,
    sx = {},
  } = props;

  return (
    <Card variant="outlined" sx={{ textAlign: 'left', ...sx }}>
      <CardContent>
        <Stack>
          <Typography fontWeight="bold" gutterBottom variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="body2">{journal}</Typography>
          <Typography variant="body2">
            {volume}({issue ?? '*'}), {page}, {year}
          </Typography>
          <Typography gutterBottom variant="body2">
            {publisher}
          </Typography>
          <Link
            href={`https://doi.org/${doi}`}
            rel="noopener noreferrer"
            target="_blank"
            underline="hover"
            variant="body2"
          >
            {doi}
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
