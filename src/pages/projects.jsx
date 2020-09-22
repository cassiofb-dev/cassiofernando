import React from 'react';

import './projects.scss';

import Project from '../components/Project';
import projects from '../assets/data/projects.json';

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((x, y) => <Project project={x} key={y} />)}
    </div>
  );
}
