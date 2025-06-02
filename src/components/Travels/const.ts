// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { formatDate } from '@/util';

import type { SceneProps } from './scene';

export const logs = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

const travelPhotos = import.meta.glob('@/assets/travels/*.jpg', {
  eager: true,
});

export const scenes: (SceneProps & { src: string })[] = Object.keys(
  travelPhotos
).map((src) => ({
  src,
}));

export const dateTimes = scenes.map(({ src }) => {
  const fileName = src.split('/').pop() || '';
  const dotIndex = fileName.lastIndexOf('.');
  const stem = dotIndex === -1 ? fileName : fileName.slice(0, dotIndex);
  const y = parseInt(`20${stem.slice(0, 2)}`, 10);
  const m = parseInt(stem.slice(2, 4), 10) - 1;
  const d = parseInt(stem.slice(4, 6), 10);
  console.log(y, m, d);
  return formatDate(new Date(y, m, d));
});
