// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { Close } from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material';
import { Box, Dialog, DialogTitle, IconButton, Stack } from '@mui/material';
import { useState } from 'react';

export type SceneProps = {
  src?: string;
  title?: string;
  sx?: SxProps<Theme>;
};

export default function Scene(props: SceneProps) {
  const { src, title = '', sx = {} } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          aspectRatio: '1 / 1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ...sx,
        }}
      >
        {src && (
          <Box
            component="img"
            loading="lazy"
            src={src}
            sx={{
              cursor: 'pointer',
              '&:hover': { opacity: 0.85 },
              objectFit: 'contain',
              width: '100%',
            }}
            onClick={() => setOpen(true)}
          />
        )}
      </Box>
      {src && (
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
          <Stack direction="column" sx={{ position: 'relative' }}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
              sx={{ p: 1 }}
            >
              <DialogTitle
                sx={{
                  left: '50%',
                  position: 'absolute',
                  textAlign: 'center',
                  transform: 'translateX(-50%)',
                  width: '100%',
                }}
              >
                {title}
              </DialogTitle>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Stack>
            <Box
              component="img"
              loading="lazy"
              src={src}
              sx={{
                height: '100%',
                objectFit: 'cotain',
                width: '100%',
              }}
            />
          </Stack>
        </Dialog>
      )}
    </>
  );
}
