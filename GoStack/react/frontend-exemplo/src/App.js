import React from "react";
import Header from "./components/Header";
function App() {
    const projects = [
        'Desenvolvimento frontEnd',
        'Desenvolvimento mobile'
    ]
  return (
    <>
      <Header title="Helcome 2" />
      <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
    </>
  );
}

export default App;
