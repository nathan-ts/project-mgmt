import React from 'react';
import { Project } from './Project';
import { MOCK_PROJECTS } from './MockProjects';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectList;