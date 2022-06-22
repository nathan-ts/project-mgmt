import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

function App() {
  return (
    <div className="container">
      {/* <ProjectsPage /> */}
      <Hello name="Nathan" enthusiasmLevel={3}/>
    </div>
  );
}

export default App;