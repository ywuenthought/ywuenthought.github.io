// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

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
};

export default function Item(props: ItemProps) {
  const { doi, issue, journal, page, publisher, title, volume, year } = props;

  return (
    <Card variant="outlined" sx={{ textAlign: 'left' }}>
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
