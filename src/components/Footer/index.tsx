// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Box } from '@mui/material';

import { EMAIL, GITHUB_ID, LINKEDIN_ID } from './const';
import { IconizedEmail, IconizedGitHub, IconizedLinkedIn } from './media';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        left: 0,
        position: 'fixed',
        right: 0,
      }}
    >
      <IconizedEmail email={EMAIL} />
      <IconizedGitHub userId={GITHUB_ID} />
      <IconizedLinkedIn userId={LINKEDIN_ID} />
    </Box>
  );
}
