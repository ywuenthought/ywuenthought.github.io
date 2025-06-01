// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type EmailProps = { email: string };

export function IconizedEmail(props: EmailProps) {
  const { email } = props;

  return (
    <IconButton href={`mailto:${email}`}>
      <Email />
    </IconButton>
  );
}

type GitHubProps = { userId: string };

export function IconizedGitHub(props: GitHubProps) {
  const { userId } = props;

  return (
    <IconButton
      href={`https://github.com/${userId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <GitHub />
    </IconButton>
  );
}

type LinkedInProps = { userId: string };

export function IconizedLinkedIn(props: LinkedInProps) {
  const { userId } = props;

  return (
    <IconButton
      href={`https://linkedin.com/in/${userId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedIn />
    </IconButton>
  );
}
