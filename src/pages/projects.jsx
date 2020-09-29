import React from 'react';

import './projects.scss';

import Project from '../templates/Project';
import SEO from '../components/SEO';
import projects from '../assets/data/projects.json';

export default function Projects() {
  return (
    <div className="projects-grid">
      <SEO title='Projects'/>
      {projects.map((x, y) => <Project project={x} key={y} />)}
    </div>
  );
}
