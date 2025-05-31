// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { GitHub, Language } from '@mui/icons-material';
import { Box, Chip, IconButton, Stack, Typography } from '@mui/material';

import { formatDate } from '@/util';

export type ItemProps = {
  description: string;
  endDate?: Date;
  github?: string;
  media?: string;
  organization: string;
  startDate: Date;
  techStack?: string[];
  title: string;
  width: number;
};

export default function Item(props: ItemProps) {
  const {
    description,
    endDate,
    github,
    media,
    organization,
    startDate,
    techStack,
    title,
    width,
  } = props;

  return (
    <Box sx={{ textAlign: 'left', width: width }}>
      <Typography fontWeight="bold" variant="h6">
        Title: {title}
      </Typography>
      <Typography color="textPrimary" variant="body2">
        Organization: {organization}
      </Typography>
      <Typography color="textPrimary" variant="body2">
        Duration: {formatDate(startDate)} -{' '}
        {endDate ? formatDate(endDate) : 'Now'}
      </Typography>
      {techStack && (
        <Stack direction="row" spacing={1}>
          {techStack.map((tech) => (
            <Chip key={`${title}:techs:${tech}`} label={tech} size="small" />
          ))}
        </Stack>
      )}
      <Typography color="textSecondary" variant="body2">
        {description}
      </Typography>
      {(github || media) && (
        <Stack>
          {github && (
            <IconButton
              href={github}
              rel="noopener noreferrer"
              size="small"
              target="_blank"
            >
              <GitHub fontSize="small" />
            </IconButton>
          )}
          {media && (
            <IconButton
              href={media}
              rel="noopener noreferrer"
              size="small"
              target="_blank"
            >
              <Language fontSize="small" />
            </IconButton>
          )}
        </Stack>
      )}
    </Box>
  );
}
