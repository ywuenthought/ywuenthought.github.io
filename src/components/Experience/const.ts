// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import scene1 from '@/assets/enthought.jpg';
import scene2 from '@/assets/ncsu.jpg';
import scene3 from '@/assets/njst.jpg';

import type { ItemProps } from './item';
import type { SceneProps } from './scene';

export const itemLists: ItemProps[][] = [
  [
    {
      field:
        'Develop AI-powered desktop and web applications to automate ' +
        'scientific data acquisition, analysis, and storage workflows.',
      organization: 'Enthought, Inc.',
      startDate: new Date(2022, 11),
      title: 'Software Developer',
    },
  ],
  [
    {
      endDate: new Date(2022, 11),
      field:
        'Perform computational modeling and simulation of point defects in ' +
        'chemical compounds; Develop a CLI backed by a structured database ' +
        'to collect, analyze, and store thermodynamic data.',
      organization: 'North Carolina State University',
      startDate: new Date(2021, 8),
      title: 'Postdoctoral Scholar',
    },
    {
      endDate: new Date(2021, 7),
      field:
        'Build and apply multiphysics computational techniques to explore ' +
        'materials properties; Manage and process large-scale research data.',
      organization: 'North Carolina State University',
      startDate: new Date(2015, 8),
      title: 'Doctor of Philosophy',
    },
  ],
  [
    {
      endDate: new Date(2010, 8),
      field:
        'Conduct computational research on materials defects; Script for ' +
        'automatic thermodynamic simulation using ab initio data.',
      organization: 'Nanjing University of Science and Technology',
      startDate: new Date(2014, 6),
      title: 'Bachelor of Science',
    },
  ],
];

export const scenes: SceneProps[] = [
  { src: scene1 },
  { src: scene2 },
  { src: scene3 },
];
