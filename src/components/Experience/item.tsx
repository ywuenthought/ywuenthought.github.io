// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box, Typography } from '@mui/material';

import { formatDate } from './util';

export type ItemProps = {
  endDate?: Date;
  field?: string;
  organization: string;
  startDate: Date;
  title: string;
  width: number;
};

export default function Item(props: ItemProps) {
  const { endDate, field, organization, startDate, title, width } = props;

  return (
    <Box sx={{ textAlign: 'left', width: width }}>
      <Typography fontWeight="bold" variant="subtitle1">
        Title: {title}
      </Typography>
      <Typography color="textPrimary" variant="body1">
        Organization: {organization}
      </Typography>
      <Typography color="textPrimary" variant="body1">
        Duration: {formatDate(startDate)} -{' '}
        {endDate ? formatDate(endDate) : 'Now'}
      </Typography>
      {field && (
        <Typography color="textSecondary" variant="body2">
          Field: {field}
        </Typography>
      )}
    </Box>
  );
}
