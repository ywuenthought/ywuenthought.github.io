// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

import type { ItemProps } from './item';

export const ITEMS: ItemProps[] = [
  {
    descriptions: [
      "I'm currently developing a web application that enables scientists to " +
        'summarize and analyze biophysical assay data through an intuitive, ' +
        'interactive interface. This app performs real-time computations in ' +
        'the browser and dynamically renders the summarized results offering ' +
        'users immediate insights based on their input data.',
      'The project is fully managed with Vite for fast, modular development. ' +
        'The frontend is built on React, MUI, and Redux Toolkit. The backend ' +
        'integrates with Enthought-hosted data catalog and Amazon S3 to have ' +
        'secure, cloud-based data storage and retrieval. The architecture is ' +
        'designed to be lightweight, responsive, and user-friendly, offering ' +
        'seamless scientific workflows in the browser.',
    ],
    organization: 'Enthought',
    startDate: new Date(2025, 3),
    techStack: [
      'Amazon S3',
      'FastAPI',
      'GitHub Actions',
      'Material UI',
      'PostgreSQL',
      'Python',
      'React',
      'Redux Toolkit',
      'SQLite',
      'Typescript',
      'Uvicorn',
      'Vega',
      'Vite',
    ],
    title: 'Biophysical Assay Summarization System',
  },
  {
    descriptions: [
      'At Enthought, I built a desktop application that leverages AI-powered ' +
        'computer vision to analyze lab-recorded videos of animal behavior. ' +
        'The system adopts a combination of open-source models like XGBoost, ' +
        'DeepLabCut, and Detectron2 etc., alongside proprietary algorithms, ' +
        'to extract and classify behavioral patterns from input video data. ' +
        'The backend performs the heavy computation, summarizes the results, ' +
        'and streams them to the application for interactive visualization ' +
        'and analysis. Users can also export the results for further use.',
      'The backend layer is fully containerized and deployed on Amazon EKS, ' +
        'and powered by a custom job queue system designed for scalability, ' +
        'high throughput, and cost-efficiency. Data is stored in AWS RDS and ' +
        'S3 for reliable cloud-based persistence and smooth data retrieval.',
    ],
    endDate: new Date(2025, 3),
    organization: 'Enthought',
    startDate: new Date(2023, 6),
    techStack: [
      'Amazon EKS',
      'Amazon RDS',
      'Amazon S3',
      'Deeplabcut',
      'Detectron2',
      'Docker',
      'Flask',
      'GitHub Actions',
      'Gunicorn',
      'Kubernetes',
      'Python',
      'Terraform',
      'XGBoost',
    ],
    title: 'Animal Behavior Observation Assistant',
  },
  {
    descriptions: [
      'At Enthought, I developed a Python-based command-line interface that ' +
        'automates processing workflows for large-scale biological data, ' +
        'including DNA, RNA, and microbiome datasets. This tool supports ' +
        'local and remote execution modes: locally it uses a lightweight ' +
        'SQLite-backed catalog for development and testing; remotely, it ' +
        'relies on an Enthought-hosted PostgreSQL database and S3-backed ' +
        'blob store to manage and process production-scale data.',
      'This system features reproducibility, scalability, and automation. ' +
        'It leverages Nextflow for workflow orchestration, integrates with ' +
        'GitHub Actions, Appveyor, and Jenkins for CI/CD, and streamlines ' +
        'interactions with an Enthought-hosted data catalog. This enables ' +
        'researchers to execute complex bioinformatics pipelines efficiently ' +
        'across diverse environments with traceability and consistency.',
    ],
    endDate: new Date(2023, 6),
    organization: 'Enthought',
    startDate: new Date(2022, 11),
    techStack: [
      'Amazon S3',
      'AppVeyor',
      'Bash',
      'GitHub Actions',
      'Jenkins',
      'Nextflow',
      'PostgreSQL',
      'Python',
      'SQLite',
    ],
    title: 'Scalable Bioinformatics Pipelines',
  },
  {
    descriptions: [''],
    endDate: new Date(2022, 11),
    organization: 'NCSU',
    startDate: new Date(2021, 8),
    title: 'Point Defects in Zinc Selenide',
  },
  {
    descriptions: [''],
    endDate: new Date(2021, 7),
    organization: 'NCSU',
    startDate: new Date(2017, 5),
    title: 'Point Defects in Strontium Titanate',
  },
];
