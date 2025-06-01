// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { GitHub, Language } from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material';
import { Chip, IconButton, Stack, Typography } from '@mui/material';

import { formatDate } from '@/util';

export type ItemProps = {
  descriptions: string[];
  endDate?: Date;
  github?: string;
  media?: string;
  organization: string;
  startDate: Date;
  techStack?: string[];
  title: string;
  sx?: SxProps<Theme>;
};

export default function Item(props: ItemProps) {
  const {
    descriptions,
    endDate,
    github,
    media,
    organization,
    startDate,
    techStack,
    title,
    sx = {},
  } = props;

  return (
    <Stack spacing={2} sx={{ ...sx }}>
      <Typography fontWeight="bold" variant="h6">
        {title}
      </Typography>
      <Typography variant="body2">{organization}</Typography>
      <Typography variant="body2">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Now'}
      </Typography>
      {techStack && (
        <Stack direction="row" spacing={1}>
          {techStack.map((tech) => (
            <Chip key={`${title}:techs:${tech}`} label={tech} size="small" />
          ))}
        </Stack>
      )}
      {descriptions.map((desc, index) => (
        <Typography key={`projects:${title}:descs:${index}`} variant="body2">
          {desc}
        </Typography>
      ))}
      {(github || media) && (
        <Stack direction="row" spacing={2}>
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
    </Stack>
  );
}
