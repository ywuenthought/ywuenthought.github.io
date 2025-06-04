// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { SxProps, Theme } from '@mui/material';
import { Stack, Switch, Typography } from '@mui/material';

export type ThemeControllerProps = {
  isDark: boolean;
  sx?: SxProps<Theme>;
  setMode: (isDark: boolean) => void;
};

export default function ThemeController(props: ThemeControllerProps) {
  const { isDark, sx = {} } = props;
  const { setMode } = props;

  return (
    <Stack alignItems="center" direction="row">
      <Typography>light</Typography>
      <Switch
        checked={isDark}
        onChange={() => setMode(!isDark)}
        sx={{
          '& .MuiSwitch-track': {
            backgroundColor: isDark ? '#fff' : '#000',
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: isDark ? '#fff' : '#000',
          },
          ...sx,
        }}
      />
      <Typography>dark</Typography>
    </Stack>
  );
}
