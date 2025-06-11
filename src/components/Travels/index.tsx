// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { ImageList, ImageListItem } from '@mui/material';

import { scenes } from './const';
import Scene from './scene';

export default function Travels() {
  return (
    <ImageList cols={4} gap={8} variant="masonry">
      {scenes.map((scene, index) => (
        <ImageListItem key={`travels:items:${index}`}>
          <Scene {...scene} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
