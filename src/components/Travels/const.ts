// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import { formatDate } from '@/util';

import type { SceneProps } from './scene';

export const locations = [
  'Universal Studios Japan',
  'Nara Park',
  'Downtown Osaka',
  'Walt Disney World Resort in Orlando',
  "NASA's Johnson Space Center",
  "NASA's Johnson Space Center",
  'The Museum of the Mausoleum of the First Qin Emperor',
  'Dujiangyan Panda Valley',
  'Dujiangyan Panda Valley',
  'Qingcheng Mountain',
  'Qingcheng Mountain',
  'Sanxingdui Museum',
  'Sanxingdui Museum',
  'San Diego Zoo',
  'San Diego Zoo',
  'United States Capitol',
  'United States Capitol',
  'Universal Epic Universe',
  'Universal Epic Universe',
];

const travelPhotos = import.meta.glob('@/assets/travels/*.jpg', {
  eager: true,
}) as { [key: string]: { default: string } };

export const scenes: (SceneProps & { src: string })[] = Object.values(
  travelPhotos
).map(({ default: src }) => ({ src }));

export const dateTimes = Object.keys(travelPhotos).map((src) => {
  const fileName = src.split('/').pop() || '';
  const dotIndex = fileName.lastIndexOf('.');
  const stem = dotIndex === -1 ? fileName : fileName.slice(0, dotIndex);
  const y = parseInt(`20${stem.slice(0, 2)}`, 10);
  const m = parseInt(stem.slice(2, 4), 10) - 1;
  const d = parseInt(stem.slice(4, 6), 10);
  return formatDate(new Date(y, m, d));
});
