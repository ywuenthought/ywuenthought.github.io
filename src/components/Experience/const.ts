// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import logo1 from '@/assets/enthought.png';
import logo2 from '@/assets/ncsu.png';
import logo3 from '@/assets/njst.svg';

import type { ItemProps } from './item';
import type { LogoProps } from './logo';

export const ITEMS: ItemProps[] = [
  {
    organization: 'Enthought',
    startDate: new Date(2022, 11),
    title: 'Software Developer',
    width: 300,
  },
  {
    endDate: new Date(2022, 11),
    organization: 'NCSU',
    startDate: new Date(2021, 8),
    title: 'Postdoctoral Scholar',
    width: 300,
  },
  {
    endDate: new Date(2021, 7),
    organization: 'NCSU',
    startDate: new Date(2015, 8),
    title: 'Doctor of Philosophy',
    width: 300,
  },
  {
    endDate: new Date(2010, 8),
    organization: 'NJST',
    startDate: new Date(2014, 6),
    title: 'Bachelor of Science',
    width: 300,
  },
];

export const LOGOS: LogoProps[] = [
  { src: logo1, width: 50 },
  { src: logo2, width: 50 },
  { src: logo2, width: 50 },
  { src: logo3, width: 50 },
];
