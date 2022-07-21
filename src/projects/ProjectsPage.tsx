import { MOCK_PROJECTS } from "./MockProjects"
import ProjectList from './ProjectList';


export default function ProjectsPage() {
  // const formattedProjects: string = JSON.stringify(MOCK_PROJECTS, null, ' ');

  return (
    <>
      <h1>Projects</h1>
      <pre>
        {/* {formattedProjects} */}
        <ProjectList projects={MOCK_PROJECTS}/>
      </pre>
    </>
  );
}