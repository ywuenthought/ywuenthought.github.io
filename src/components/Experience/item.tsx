// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { formatDate } from '../../util';

export type ItemProps = {
  endDate?: Date;
  field?: string;
  organization: string;
  startDate: Date;
  title: string;
  sx?: SxProps<Theme>;
};

export default function Item(props: ItemProps) {
  const { endDate, field, organization, startDate, title, sx = {} } = props;

  return (
    <Box sx={{ ...sx }}>
      <Typography fontWeight="bold" variant="subtitle1">
        {title}
      </Typography>
      <Typography variant="body1">{organization}</Typography>
      <Typography variant="body1">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Now'}
      </Typography>
      {field && <Typography variant="body2">{field}</Typography>}
    </Box>
  );
}
