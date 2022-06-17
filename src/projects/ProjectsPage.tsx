import { MOCK_PROJECTS } from "./MockProjects"


export default function ProjectsPage() {
  const formattedProjects: string = JSON.stringify(MOCK_PROJECTS, null, ' ');

  return (
    <>
      <h1>Projects</h1>
      <pre>
        {formattedProjects}
      </pre>
    </>
  );
}