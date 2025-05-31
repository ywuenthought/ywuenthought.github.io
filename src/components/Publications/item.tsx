// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Card, CardContent, Divider, Link, Typography } from '@mui/material';

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
    <Card variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography fontWeight="medium" variant="body2">
          {journal}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {volume}({issue ?? '*'}), {page}, {year}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Published by {publisher}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Link
          href={`https://doi.org/${doi}`}
          rel="noopener noreferrer"
          target="_blank"
          underline="hover"
          variant="body2"
        >
          {doi}
        </Link>
      </CardContent>
    </Card>
  );
}
